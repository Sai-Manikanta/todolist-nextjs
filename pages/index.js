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
    <body className={`${darkModeStatus ? 'dark' : ''} h-screen`}>
      <div className="bg-white dark:bg-gray-900 h-full">
        <Head>
          <title>TodoList</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Top header of light and dark images */}
        <div className="h-64" style={darkModeStatus ? nightInlineStyle : dayInlineStyle}></div>
        <button onClick={() => setDarkModeStatus(!darkModeStatus)}>Toggle theme</button>
      </div>
    </body>
  )
}
