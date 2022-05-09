import Navbar from '../components/Navbar';
import Banner from '../components/Shop/Banner';
import ProductList from '../components/Shop/ProductList';
import Footer from '../components/Footer';
import { getData } from '../firebase/fetchData';

function Shop({ products }) {
    return (
        <>
            <Navbar />
            <Banner />
            <ProductList products={products} />
            <Footer />
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
