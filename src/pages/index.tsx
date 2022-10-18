import type { NextPage } from 'next'
import Link from 'next/link'
// import '../styles/reset.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello world test</h1>
      <Link href='/login'>
        <span>go to login</span>
      </Link>
    </div>
  )
}

export default Home
