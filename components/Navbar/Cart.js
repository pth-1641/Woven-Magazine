import { useCallback, useEffect } from 'react';
import { VscClose } from 'react-icons/vsc';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import useStore from '../../appStore/store';

function Cart({ setDisplayCart }) {
    const books = useStore((state) => state.books);
    const amount = useStore((state) => state.amount);
    const increaseBook = useStore((state) => state.increaseBook);
    const decreaseBook = useStore((state) => state.decreaseBook);
    const setLocalBooks = useStore((state) => state.setLocalBooks);
    const calculatingAmount = useCallback(
        useStore((state) => state.calculatingAmount),
        []
    );

    useEffect(() => {
        if (localStorage.books) {
            setLocalBooks(JSON.parse(localStorage.books));
            calculatingAmount();
        }
        return;
    }, []);

    return (
        <div className='fixed inset-x-0 top-11 bg-white border border-gray-300 md:top-10 md:w-96 md:absolute md:inset-auto md:right-0'>
            <div className='pt-3 px-5'>
                <div>
                    <div className='flex-between'>
                        <div className='flex items-end select-none'>
                            <h3 className='font-serif text-3xl font-thin leading-none mr-3'>
                                Your Cart
                            </h3>
                            <span className='text-slate-400 font-medium text-sm'>
                                ${amount} USD
                            </span>
                        </div>
                        <span
                            className='text-2xl text-gray-400 self-start cursor-pointer'
                            onClick={() => {
                                setDisplayCart(false);
                            }}
                        >
                            <VscClose />
                        </span>
                    </div>
                </div>
                <hr className='border-gray-200 mt-4' />
                {books?.map((product) => (
                    <div
                        className='flex py-4 border-b-[1px] border-y-gray-200 gap-2'
                        key={product.id}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className='aspect-square h-20'
                        />
                        <div className='flex-1'>
                            <h4 className='text-sm font-serif font-thin'>
                                {product.title}
                            </h4>
                            <div className='flex-between mt-1'>
                                <div className='flex'>
                                    <button
                                        className='h-8 w-8 border-2 border-gray-400 flex-center'
                                        onClick={() => {
                                            decreaseBook(product.id);
                                            calculatingAmount();
                                        }}
                                    >
                                        -
                                    </button>
                                    <input
                                        type='text'
                                        className='h-8 w-8 text-center outline-none border-y-2 border-gray-400 text-sm'
                                        value={product.quantity}
                                        readOnly
                                    />
                                    <button
                                        className='h-8 w-8 border-2 border-gray-400 flex-center'
                                        onClick={() => {
                                            increaseBook(product.id);
                                            calculatingAmount();
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <span className='text-sm text-gray-400 font-medium'>
                                    ${product.price} USD
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link href='/cart'>
                <a className='w-full flex-center bg-emerald-400 text-white py-4 text-sm font-semibold mt-4'>
                    CHECKOUT{' '}
                    <span className='text-2xl ml-2'>
                        <BsArrowRight />
                    </span>
                </a>
            </Link>
        </div>
    );
}

export default Cart;
