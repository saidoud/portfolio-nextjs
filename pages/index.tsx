import type { NextPage } from 'next';
import Head from 'next/head'
import { Box, Button } from '@mui/material'
import Header from 'components/Header';
import Footer from 'components/Footer';

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
        <p>Nextjs Portfolio</p>
        <Box sx={{width:200 ,m:3}}>
          <Button color="primary" variant='contained' fullWidth>Update</Button>
        </Box>
      </main>
      <Footer/>
    </div>
  )
}

export default Home;
