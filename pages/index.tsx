import type { NextPage } from 'next';
import Head from 'next/head';

// project import
import Header from 'components/Header';
import HeroSection from 'sections/HeroSection';
import AboutSection from 'sections/AboutSection';
import ServiceSection from 'sections/ServiceSection';
import ProjectSection from 'sections/ProjectSection';
import Footer from 'components/Footer';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Full Stack Developer" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServiceSection />
                <ProjectSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
