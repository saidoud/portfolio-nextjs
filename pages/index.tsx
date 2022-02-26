import type { NextPage } from 'next';
import Head from 'next/head';

// project import
import Header from 'components/Header';
import HeroSection from 'sections/HeroSection';
import AboutSection from 'sections/AboutSection';
import ServiceSection from 'sections/ServiceSection';
import ProjectSection from 'sections/ProjectSection';

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
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
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
        </div>
    );
};

export default Home;
