import PouchDB from 'pouchdb';

const localDb = new PouchDB('profitMaster')


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