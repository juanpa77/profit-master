import PouchDB from 'pouchdb';
import { Transaction } from '../../global';

// const localDb = new PouchDB('profitMaster')
const localDb = new PouchDB('http://localhost:5984/profit-master')


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


export const addTransaction = (transaction: Transaction) => {
  console.log(transaction)
  const formatTransaction: User = {
    _id: transaction.id,
    transactions: {
      years: {
        [transaction.amount]: {
          months: {
            [transaction.amount]: [
              transaction
            ]
          }
        }
      }
    }
  }
  localDb.put(formatTransaction).then((res) => console.log(res))
}