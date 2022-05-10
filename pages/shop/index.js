import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Shop/Banner';
import ProductList from '../../components/Shop/ProductList';
import Footer from '../../components/Footer';
import { getData } from '../../firebase/fetchData';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';

function Shop({ products }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageTitle title='Products Archive' />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Banner />
                    <ProductList products={products} />
                    <Footer />
                </>
            )}
        </>
    );
}

export async function getStaticProps() {
    const products = [];
    const querySnapshot = await getData('Shop');
    querySnapshot.forEach((doc) => {
        products.push(doc.data());
    });

    return {
        props: {
            products,
        },
    };
}

export default Shop;
