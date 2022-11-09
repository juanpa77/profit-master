
import { formatNumber } from '../../utility/formatNumber'
import { Item, TransactionItem, Wrapper } from './styled'
import useTransactionList from './useTransactionList'

const TransactionList = () => {
  const transactionList = useTransactionList()
  // console.log(transactionList)
  return (
    <Wrapper>
      {transactionList.map(transaction =>
        <TransactionItem key={transaction.id}>
          <Item gridArea='A'>{formatNumber(transaction.amount)}</Item>
          <Item gridArea='C'>{transaction.category}</Item>
          <Item gridArea='D'>{transaction.date}</Item>
        </TransactionItem>
      )}
    </Wrapper>
  )
}

export default TransactionList