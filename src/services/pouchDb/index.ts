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

export interface LocalDB {
  _id: string
  transaction: Transaction[]
}

export const createMonthStructure = () => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  const monthsId = months.map(month => { return { _id: month } })
  localDb.bulkDocs(monthsId).then(res => console.log(res))
}

export const addTransaction = (transaction: Transaction) => {
  const id = splitDate(transaction.date).month
  localDb.get<LocalDB>(id)
    .then(doc => {
      return localDb.put({
        _rev: doc._rev,
        _id: id,
        transaction: [...doc.transaction, transaction]
      })
        .then(res => console.log(res))
    })
    .catch(() => localDb.put({
      _id: id,
      transaction: [transaction]
    }))
}
