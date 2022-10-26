import en from "../../../public/locale/en"
import es from "../../../public/locale/es"
import { Box, CheckBox, Switch } from "./styled"
import useToggle, { TransactionType } from "./useToggle"

type Props = {
  locale: string | undefined
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const positionCheckBox: TransactionType = {
  income: '1/2',
  expenses: '2/3'
}

const Toggle = ({ locale }: Props) => {
  const t = locale === 'en' ? en : es
  const { handleToggle, transactionType } = useToggle()
  const texColorAnimate = (positionBox: string) => {
    return { color: positionCheckBox[transactionType] === positionBox && '#d740e5' || '#0b0b0b' }
  }

  return (
    <Switch role='switch'>
      <CheckBox layout
        role={'checkbox'}
        animate={{ color: '#5e1ca0' }}
        transition={spring}
        positioncolumncheckbox={positionCheckBox[transactionType]}
      />
      <Box
        onClick={() => handleToggle("income")}
        positioncolumncheckbox="1/2"
        animate={texColorAnimate('1/2')}>
        {t.incomes}
      </Box>
      <Box
        onClick={() => handleToggle('expenses')}
        positioncolumncheckbox="2/3"
        animate={texColorAnimate('2/3')}>
        {t.expenses}
      </Box>
    </Switch>
  )
}

export default Toggle