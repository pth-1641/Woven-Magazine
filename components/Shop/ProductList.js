import { getData } from '../../firebase/fetchData';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function Product() {
    const [products, setProducts] = useState([]);
    const [classify, setClassify] = useState('individual');

    useEffect(() => {
        async function fetchData() {
            // Fetching data from firestore
            const firestoreData = [];
            const querySnapshot = await getData('Shop');
            querySnapshot.forEach((doc) => {
                if (doc.data().type === classify) {
                    firestoreData.push(doc.data());
                }
            });
            setProducts(firestoreData);
        }
        fetchData();
    }, [classify]);

    const handleClassify = (e) => {
        setClassify(e.target.innerText.toLowerCase());
    };

    return (
        <div className='py-14 max-w-screen-2lg mx-auto px-10'>
            <div className='flex-between text-sm'>
                <h3 className='hidden md:block'>WOVEN GOODS</h3>
                <div>
                    <a
                        className={`${
                            classify === 'individual' && 'text-emerald-500'
                        } hover:text-emerald-500 cursor-pointer`}
                        onClick={(e) => handleClassify(e)}
                    >
                        INDIVIDUAL
                    </a>
                    {' | '}
                    <a
                        className={`${
                            classify !== 'individual' && 'text-emerald-500'
                        } hover:text-emerald-500 cursor-pointer`}
                        onClick={(e) => handleClassify(e)}
                    >
                        WHOLESALE
                    </a>
                </div>
            </div>
            <hr className='mt-6 mb-10' />
            <ul className='grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-2'>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </ul>
        </div>
    );
}

export default Product;
