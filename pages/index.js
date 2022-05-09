import Navbar from '../components/Navbar';
import Slider from '../components/Home/Silder';
import About from '../components/Home/About';
import StoryList from '../components/Home/StoryList';
import Films from '../components/Home/Films';
import Blog from '../components/Home/Blog';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { getData, getDataWithLimit } from '../firebase/fetchData';
import PageTitle from '../components/PageTitle';

function Home({ slides, blogs }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageTitle
                title='Home'
                description='Woven Magazine exists to celebrate artists, craftsmen and women, and makers alike to share their stories of fear and triumph, risk and return.'
            />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Slider slides={slides} />
                    <About />
                    <StoryList />
                    <Films />
                    <Blog blogs={blogs} />
                    <Footer />
                </>
            )}
        </>
    );
}

export async function getStaticProps() {
    const slides = [];
    const blogs = [];

    const slidesData = await getData('Slide');
    slidesData.forEach((doc) => {
        slides.push(doc.data());
    });

    const blogsData = await getDataWithLimit('Blogs', 4);
    blogsData.forEach((doc) => {
        blogs.push(doc.data());
    });

    return {
        props: {
            slides,
            blogs,
        },
    };
}

export default Home;
