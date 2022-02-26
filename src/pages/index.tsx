import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('')

  useEffect(() => {
    const currentHour = new Date().getHours()
    console.log(currentHour)
    if (currentHour < 12) setWelcomeMessage('Bom dia')
    else if (currentHour < 18) setWelcomeMessage('Boa tarde')
    else setWelcomeMessage('Boa noite')
  }, [])

  return (
    <>
      <div>
        <Head>
          <title>HomePage</title>
        </Head>
        <h1>{welcomeMessage}</h1>
      </div>
    </>
  )
}
