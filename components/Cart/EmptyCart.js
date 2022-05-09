import Link from 'next/link';

function EmptyCart() {
    return (
        <>
            <div className='bg-gray-200 text-center font-serif py-4 font-thin px-5'>
                <p>Checkout is not available whilst your cart is empty.</p>
            </div>
            <div className='bg-white min-h-screen font-serif flex-center flex-col justify-around text-center px-5'>
                <div>
                    <h2 className='text-4xl font-thin mb-3'>Your Cart</h2>
                    <em>
                        Looks like your cart is empty. Head on over to the shop.
                    </em>
                </div>
                <em>Your cart is currently empty.</em>
                <Link href='/shop'>
                    <a className='font-poppins border-2 border-emerald-400 text-emerald-400 text-sm py-2 px-4 font-semibold duration-300 hover:text-white hover:bg-emerald-400'>
                        RETURN TO SHOP
                    </a>
                </Link>
            </div>
        </>
    );
}

export default EmptyCart;
