import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import EmptyCart from '../components/Cart/EmptyCart';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import PageTitle from '../components/PageTitle';

function Cart() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageTitle title='Cart' />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <EmptyCart />
                    <Footer />
                </>
            )}
        </>
    );
}

export default Cart;
