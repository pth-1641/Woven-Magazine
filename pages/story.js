import Navbar from '../components/Navbar';
import Main from '../components/Story';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import PageTitle from '../components/PageTitle';
import { useRouter } from 'next/router';

function Story() {
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const category = router.query.category;

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageTitle title={category ?? 'Stories Archive'} />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Main category={category} />
                    <Footer />
                </>
            )}
        </>
    );
}

export default Story;
