import type { NextPage } from 'next';
import Head from 'next/head'
import { Button } from '@mui/material'

const Home:NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <p>Nextjs Portfolio</p>
        <Button color="primary" variant='outlined'>Update</Button>
      </main>
    </div>
  )
}

export default Home;
