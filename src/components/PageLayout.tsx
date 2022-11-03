import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
  title?: string
}

export default function PageLayout({ children, title = 'Profit Master' }: Props) {

  return (
    <>
      <Head>
        <title><title></title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}