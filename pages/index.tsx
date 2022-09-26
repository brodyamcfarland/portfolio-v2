import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[#121318] text-white h-screen font-Montserrat snap-y snap-mandatory overflow-scroll z-0 px-3'>
      <Head>
        <title>Brody McFarland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className='snap-center'>
        <Hero />
      </section>
    </div>
  )
}

export default Home
