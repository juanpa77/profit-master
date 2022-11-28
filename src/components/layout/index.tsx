import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode, useRef, useState } from "react"
import ListIcon from "../../../assets/listIcon"
import { TransactionIcon } from "../../../assets/transactionIcon"
import WalletIcon from "../../../assets/walletIcon"
import { Background, Item, NavBar, Wrapper } from "./styled"

type Props = {
  children: ReactNode
}

type RouteRef = '/add-transaction' | '/' | '/showTransactions'

type Page = {
  icon: () => JSX.Element
  href: RouteRef
  label: string
}

const Layout = ({ children }: Props) => {
  const pages: Page[] = [
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

  const router = useRouter().asPath as RouteRef
  const homePage: Page = pages.find(icon => icon.href === router) ?? pages[0]
  const [selectedPage, setSelectedPage] = useState<Page>(homePage)
  const layoutRef = useRef<HTMLDivElement>(null)
  const [direction, setDirection] = useState(1000)

  const handleLayout = (page: Page) => {
    setSelectedPage(previousPage => {
      const nexPage = pages.indexOf(page)
      const currentPage = pages.indexOf(pages.find(icon => icon.href === previousPage.href) ?? pages[0])
      nexPage > currentPage
        ? setDirection(0)
        : setDirection(1000)
      return page
    })
  }

  return (
    <AnimatePresence>
      <Background ref={layoutRef}>
        <Wrapper
          key={selectedPage?.label}
          initial={{ width: direction }}
          animate={{ width: '100%' }}
          exit={{ x: layoutRef.current?.clientWidth }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </Wrapper>
        <NavBar>
          {pages.map(page => (
            <Link
              href={page.href}
              key={page.label}
            >
              <Item
                onClick={() => handleLayout(page)}
                isselected={selectedPage?.label === page.label}>
                {page.icon()}
              </Item>
            </Link>
          ))}
        </NavBar>
      </Background>
    </AnimatePresence>
  )
}

export default Layout