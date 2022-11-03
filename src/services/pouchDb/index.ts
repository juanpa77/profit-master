import PouchDB from 'pouchdb';
import { Transaction } from '../../global';
import { splitDate } from '../../utility/formatData';

// const localDb = new PouchDB('profitMaster')
const localDb = new PouchDB('http://localhost:5984/profit-master', {
  auth: {
    username: 'juanAdmin',
    password: 'tressoles'
  }
})


export default localDb

export interface User {
  _id: string
  transactions: {
    years: {
      [key: number]: {
        months: {
          [key: number]: Transaction[]
        }
      }
    }
  }
}

type LocalDB = {
  _id: string
  transactions: Transactions
}

export interface Transactions {
  expenses: Transaction[]
  income: Transaction[]
}

interface TransactionFromLocalDB {
  id: string
  type: string
  amount: string
  date: string
  category: string
  description: string
  week: number
}

interface TransactionsDB {
  _id: string,
  transactions: {
    expenses: TransactionFromLocalDB[]
    income: TransactionFromLocalDB[]
  }
}

export const createMonthStructure = () => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  const monthsId = months.map(month => { return { _id: month } })
  localDb.bulkDocs(monthsId).then(res => console.log(res))
}

const updateTransactions = (transaction: Transaction, doc?: LocalDB) => {
  let transactionType
  // check transaction type and create object with separate transaction types
  if (doc) {
    return transaction.type === 'income'
      ? transactionType = {
        expenses: [...doc.transactions.expenses],
        income: [...doc.transactions.income, transaction]
      }
      : transactionType = {
        expenses: [...doc!.transactions.expenses, transaction],
        income: [...doc!.transactions.income,]
      }
  }
  transaction.type === 'income'
    ? transactionType = {
      income: [],
      expenses: [transaction]
    }
    : transactionType = {
      expenses: [],
      income: [transaction]
    }
  return transactionType
}

export const addTransaction = (transaction: Transaction) => {
  const currentMonth = splitDate(transaction.date).month
  let id: string
  transaction.week === 0
    ? id = `${parseInt(currentMonth) - 1}`
    : id = currentMonth

  localDb.get<LocalDB>(id)
    .then(doc => {
      return localDb.put<LocalDB>({
        _rev: doc._rev,
        _id: id,
        transactions: updateTransactions(transaction, doc)
      })
        .then(res => console.log(res))
    })
    .catch(() => localDb.put<LocalDB>({
      _id: id,
      transactions: updateTransactions(transaction)
    }))
}

const formatTransactions = (transactions: TransactionFromLocalDB[]) => {
  return transactions.map(transaction => {
    return {
      ...transaction,
      amount: parseInt(transaction.amount)
    }
  })
}

export const getTransactions = (month: string) => {
  return localDb.get<TransactionsDB>(month).then(allMonthTransactions => {
    return {
      expenses: formatTransactions(allMonthTransactions.transactions.expenses),
      income: formatTransactions(allMonthTransactions.transactions.income)
    }
  })
}
