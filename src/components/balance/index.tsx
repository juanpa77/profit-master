import en from '../../public/locale/en'
import es from '../../public/locale/en'
import { Item, Line, NumberItem, WrapperCard, WrapperItem } from "./styled";
import { formatNumber } from "../../utility/formatData";
import useBalance from "./useBalance";
import localDb, { addTransaction } from '../../services/pouchDb';
import PouchDB from 'pouchdb';

type Props = {
  locale: string | undefined
  // db: Idb; dateRanges: string 
}

export const Balance = ({ locale }: Props) => {
  // const [available, income, expenses, dateRanges] = useBalance(props)
  const t = locale === 'en' ? en : es

  const db = new PouchDB('http://localhost:5984/profit-master')
  fetch("http://localhost:5984/profit-master", {
    mode: 'cors', headers: {
      'Authorization': 'Basic ' + (`juanAdmin:tressoles`)
    }
  }).then((res) => console.log(res))
  // db.info().then((info) => console.log(info))

  // localDb.info().then((info) => console.log(info))
  const transaction: Transaction = {
    amount: 10,
    category: 'test',
    date: '10',
    description: 'abs',

    id: 'ads',
    type: 'test'
  }
  return (
    <>
      <button onClick={() => { addTransaction(transaction) }}>test</button>
      <WrapperCard>
        <WrapperItem>
          <Item>{t.available + /* dateRanges */ 'd'}</Item>
          <NumberItem>{formatNumber(2)}</NumberItem>
        </WrapperItem>
        <Line />
        <WrapperItem direction="row">
          <WrapperItem>
            <Item>{t.income}</Item>
            <NumberItem>{formatNumber(2)}</NumberItem>
          </WrapperItem>
          <WrapperItem>
            <Item>{t.expense}</Item>
            <NumberItem>{formatNumber(2)}</NumberItem>
          </WrapperItem>
        </WrapperItem>
      </WrapperCard>
    </>
  )
}
