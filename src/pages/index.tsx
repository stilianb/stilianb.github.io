import Contact from '@/components/Contact'
import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'
import Work from '@/components/Work'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stilian's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Navbar  />
      <Work />
      <Contact />
    </>
  )
}
