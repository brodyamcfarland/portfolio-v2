import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-[#121318] text-white h-screen font-Montserrat snap-y snap-mandatory overflow-scroll z-0 px-3 scroll-smooth'>

      <Head>
        <title>Brody McFarland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-start'>
        <Experience />
      </section>
      
      <section id="skills" className='snap-center'>
        <Skills />
      </section>
    </div>
  )
}

export default Home
