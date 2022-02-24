import type { NextPage } from 'next';
import Head from 'next/head'

// project import
import Header from 'components/Header';

const Home:NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main >
      </main>
    </div>
  )
}

export default Home;
