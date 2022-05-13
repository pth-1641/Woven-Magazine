import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Main from '../../components/Blog/BlogDetail';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

function BlogDetail() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Main />
                    <Footer />
                </>
            )}
        </>
    );
}

export default BlogDetail;
