import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { getData } from '../../firebase/fetchData';
import { BsArrowRight } from 'react-icons/bs';

function Shop() {
    const [shopItem, setShopItem] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const firestoreData = [];
                const querySnapshot = await getData('Shop');
                querySnapshot.forEach((doc) => {
                    if (doc.data().square_img) {
                        firestoreData.push(doc.data());
                    }
                });
                setShopItem(firestoreData);
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='fixed z-30 inset-x-0 top-14' style={{ zIndex: -1 }}>
            <div
                className='fixed inset-0 bg-white-0.9 pointer-events-none opacity-0 group-hover:opacity-100 duration-700'
                style={{ zIndex: -2 }}
            ></div>
            <div className='-translate-y-[100vh] h-0 group-hover:translate-y-0 duration-700'>
                <div className='grid grid-cols-4'>
                    {shopItem.map((item) => (
                        <Link href={`/shop/${item.id}`} key={item.id} passHref>
                            <div className='relative cursor-pointer'>
                                <img
                                    src={item.square_img}
                                    alt={item.title}
                                    className='w-full'
                                />
                                <div className='absolute inset-0 flex-center flex-col text-lg bg-white-0.9 opacity-0 hover:opacity-100 duration-300 text-center'>
                                    <h3 className='font-serif'>{item.title}</h3>
                                    <p className='font-semibold text-emerald-500 text-sm'>
                                        {item.sale ? (
                                            <>
                                                <strike className='mr-2'>
                                                    ${item.cost} USD
                                                </strike>
                                                <span>${item.sale} USD</span>
                                            </>
                                        ) : (
                                            <span>${item.cost} USD</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link href='/shop'>
                    <a
                        type='button'
                        className='flex-center w-full py-4 bg-gray-100 font-medium cursor-pointer hover:text-white hover:bg-emerald-500 duration-300'
                    >
                        SHOP ALL
                        <span className='ml-2 font-bold text-xl'>
                            <BsArrowRight />
                        </span>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Shop;
