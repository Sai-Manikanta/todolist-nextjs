import { useState } from "react"
import Head from 'next/head'

export default function Home() {
  const [darkModeStatus, setDarkModeStatus] = useState(false);

  const dayInlineStyle = {
    backgroundImage: 'url("/img/day1.jpeg")'
  }

  const nightInlineStyle = {
    backgroundImage: 'url("/img/night1.jpeg")'
  }

  return (
    <div>
      <Head>
        <title>TodoList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-64 bg-blue-800" style={darkModeStatus ? nightInlineStyle : dayInlineStyle}>

      </div>
    </div>
  )
}
