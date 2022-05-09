import Navbar from '../../components/Navbar';
import Main from '../../components/Blog';
import Footer from '../../components/Footer';
import { getData } from '../../firebase/fetchData';

function Blog({ blogs }) {
    return (
        <>
            <Navbar />
            <Main blogs={blogs} />
            <Footer />
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
