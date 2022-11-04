import en from '../../public/locale/en'
import es from '../../public/locale/en'
import { Item, Line, NumberItem, WrapperCard, WrapperItem } from "./styled";
import { formatNumber } from "../../utility/formatData";
import useBalance, { TimeFrame } from "./useBalance";

type Props = {
  locale: string | undefined
  timeFrame: TimeFrame
}

export const Balance = ({ locale, timeFrame }: Props) => {
  const { available, currentExpenses, currentIncome } = useBalance(timeFrame)
  const t = locale === 'en' ? en : es

  return (
    <>
      <WrapperCard>
        <WrapperItem>
          <Item>{`${t.available} ${timeFrame}`}</Item>
          <NumberItem>{formatNumber(available)}</NumberItem>
        </WrapperItem>
        <Line />
        <WrapperItem direction="row">
          <WrapperItem>
            <Item>{t.income}</Item>
            <NumberItem>{formatNumber(currentIncome)}</NumberItem>
          </WrapperItem>
          <WrapperItem>
            <Item>{t.expense}</Item>
            <NumberItem>{formatNumber(currentExpenses)}</NumberItem>
          </WrapperItem>
        </WrapperItem>
      </WrapperCard>
    </>
  )
}
