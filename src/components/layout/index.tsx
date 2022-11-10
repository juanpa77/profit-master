import Link from "next/link"
import { ReactNode, useState } from "react"
import ListIcon from "../../../assets/listIcon"
import { TransactionIcon } from "../../../assets/transactionIcon"
import WalletIcon from "../../../assets/walletIcon"
import { Background, Item, NavBar, Wrapper } from "./styled"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const icons = [
    {
      icon: WalletIcon,
      href: '/',
      label: 'account-summary'
    },
    {
      icon: TransactionIcon,
      href: '/add-transaction',
      label: 'add-transaction'
    },
    {
      icon: ListIcon,
      href: '/showTransactions',
      label: 'showTransactions'
    },
  ]

  const [selectedIcon, setSelectedIcon] = useState(icons[0])

  return (
    <Background>
      <Wrapper
        key={selectedIcon ? selectedIcon.label : "empty"}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.25 }}>
        {children}
      </Wrapper>
      <NavBar>
        {icons.map(icon => (
          <Link
            href={icon.href}
            key={icon.label}
          >
            <Item
              onClick={() => setSelectedIcon(icon)}
              isselected={selectedIcon.label === icon.label}>
              {icon.icon()}
            </Item>
          </Link>
        ))}
      </NavBar>
    </Background>
  )
}

export default Layout