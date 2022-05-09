import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Main from '../../components/Blog';
import Footer from '../../components/Footer';
import { getData } from '../../firebase/fetchData';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';

function Blog({ blogs }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageTitle
                title='Blogs'
                description='Woven Blog, featuring the explorations, journeys, and thoughts of Woven Magazine'
            />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Main blogs={blogs} />
                    <Footer />
                </>
            )}
        </>
    );
}

export async function getStaticProps() {
    const blogs = [];

    const querySnapshot = await getData('Blogs');
    querySnapshot.forEach((doc) => {
        blogs.push(doc.data());
    });

    return {
        props: {
            blogs,
        },
    };
}

export default Blog;
