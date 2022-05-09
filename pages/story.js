import Navbar from '../components/Navbar';
import Main from '../components/Story';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

function Story() {
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

export default Story;
