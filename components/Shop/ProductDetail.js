import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getDetail } from '../../firebase/fetchData';
import Link from 'next/link';
import ProductSlide from './ProductSlide';
import PageTitle from '../PageTitle';
import useStore from '../../appStore/store';

function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productDetail;

    const [productDetail, setProductDetail] = useState({});
    const [bookedAmount, setBookedAmount] = useState(1);
    const addBook = useStore((state) => state.addBook);
    const calculatingAmount = useStore((state) => state.calculatingAmount);

    useEffect(() => {
        async function fetchData() {
            const result = await getDetail('Product_Detail', productId);
            result.forEach((doc) => setProductDetail(doc.data()));
        }
        fetchData();
    }, [router.isReady, productId]);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addBook({
            id: productDetail.id,
            title: productDetail.title,
            quantity: bookedAmount,
            thumbnail: productDetail.images[1],
            price: productDetail.sale,
        });
        calculatingAmount();
    };

    const handleAmount = (e) => {
        setBookedAmount(Number(e.target.value));
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <PageTitle title={productDetail.title} />
            <div className='p-4 md:p-10 lg:p-20'>
                <div className='flex flex-col-reverse lg:grid grid-cols-10 gap-16'>
                    <div className='col-span-4 grid gap-5'>
                        <div className='text-xl'>
                            <h1 className='font-serif text-3xl font-thin'>
                                {productDetail?.title}
                            </h1>
                            {productDetail.sale ? (
                                <>
                                    <strike>${productDetail.cost} USD</strike>
                                    <span className='text-emerald-500 ml-2'>
                                        ${productDetail.sale} USD
                                    </span>
                                </>
                            ) : (
                                <span className='text-emerald-500'>
                                    ${productDetail.cost} USD
                                </span>
                            )}
                        </div>
                        {productDetail.content?.map((paragraph) => (
                            <p
                                key={paragraph}
                                className='text-sm font-thin tracking-wider font-serif'
                            >
                                {paragraph}
                            </p>
                        ))}
                        {productDetail.onSale ? (
                            <form className='text-emerald-500 text-sm flex gap-2'>
                                <button
                                    className='btn-outline'
                                    onClick={handleAddToCart}
                                >
                                    &#43; ADD TO CARD
                                </button>
                                <select
                                    className='border-2 border-emerald-500 p-1 outline-none font-semibold'
                                    onChange={handleAmount}
                                >
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </form>
                        ) : (
                            <button className='border-2 border-gray-300 px-4 py-2 w-max text-gray-300 font-semibold mt-4 text-sm'>
                                OUT OF STOCK
                            </button>
                        )}
                        <hr className='border-gray-300 my-4' />
                        <div className='flex flex-col font-poppins gap-5 md:grid md:gap-10 grid-cols-2'>
                            <div>
                                <h5 className='mb-3'>SPECS</h5>
                                <div className='grid gap-2'>
                                    {productDetail.specs?.map((spec) => (
                                        <p
                                            key={spec}
                                            className='text-sm font-serif font-thin'
                                        >
                                            {spec}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h5 className='mb-3'>SHIPPING & HANDLING</h5>
                                <p className='text-sm font-serif font-thin'>
                                    Ships worldwide. Shipping & handling is
                                    added at checkout and based on customer’s
                                    shipping postal zone. For more information
                                    please visit our{' '}
                                    <Link href='/faq'>
                                        <span className='text-highlight'>
                                            FAQ
                                        </span>
                                    </Link>{' '}
                                    and{' '}
                                    <Link href='/term-conditions'>
                                        <span className='text-highlight'>
                                            Terms & Conditions
                                        </span>
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <ProductSlide images={productDetail?.images} />
                    </div>
                </div>
                <hr className='border-gray-300 my-10' />
                <button
                    className='btn-outline block mx-auto'
                    onClick={handleScrollToTop}
                >
                    BACK TO TOP
                </button>
            </div>
        </>
    );
}

export default ProductDetail;
