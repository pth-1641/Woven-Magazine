import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CartWithItem from '../components/Cart';
import EmptyCart from '../components/Cart/EmptyCart';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import PageTitle from '../components/PageTitle';
import useStore from '../appStore/store';

function Cart() {
    const [loading, setLoading] = useState(true);
    const books = useStore((state) => state.books);

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
                    {books.length ? <CartWithItem /> : <EmptyCart />}
                    <Footer />
                </>
            )}
        </>
    );
}

export default Cart;
