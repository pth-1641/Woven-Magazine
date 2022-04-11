import { VscClose } from 'react-icons/vsc';
import { BsArrowRight } from 'react-icons/bs';

function Cart({ setDisplayCart, setDisplayShop, displayShop }) {
    return (
        <div className='fixed inset-x-0 top-11 bg-white border border-gray-300 md:top-10 md:w-96 md:absolute md:inset-auto md:right-0'>
            <div className='pt-3 px-5'>
                <div className='flex-between'>
                    <div className='flex items-end select-none'>
                        <h3 className='font-serif text-3xl font-thin leading-none mr-3'>
                            Your Cart
                        </h3>
                        <span className='text-slate-400 font-medium text-sm'>
                            $0 USD
                        </span>
                    </div>
                    <span
                        className='text-2xl text-gray-400 self-start cursor-pointer'
                        onClick={() => {
                            setDisplayCart(false);
                            setDisplayShop(!displayShop);
                        }}
                    >
                        <VscClose />
                    </span>
                </div>

                <hr className='border-gray-300 my-10' />
            </div>
            <button className='w-full flex-center bg-emerald-400 text-white py-4 text-sm font-semibold'>
                CHECKOUT{' '}
                <span className='text-2xl ml-2'>
                    <BsArrowRight />
                </span>
            </button>
        </div>
    );
}

export default Cart;
