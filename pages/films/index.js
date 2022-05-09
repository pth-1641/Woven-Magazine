import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Main from '../../components/Film';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';

function Film() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageTitle title='Films Archive' />
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

export default Film;
