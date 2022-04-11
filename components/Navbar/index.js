import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { VscThreeBars } from 'react-icons/vsc';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import Cart from './Cart';
import Search from './Search';
import NavList from './NavList';
import Shop from './Shop';

function Navbar() {
    const [displayCart, setDisplayCart] = useState(false);
    const [displaySearch, setDisplaySearch] = useState(false);
    const [displayNavList, setDisplayNavList] = useState(false);
    const [displayShop, setDisplayShop] = useState(true);

    useEffect(() => {
        if (displayCart || displaySearch || displayNavList) {
            setDisplayShop(false);
        } else {
            setDisplayShop(true);
        }
    }, [displayCart, displaySearch, displayNavList]);

    const handleCart = () => setDisplayCart(!displayCart);

    return (
        <>
            <div className='shadow w-full h-11 md:h-14 shadow-zinc-200 fixed top-0 z-50'>
                <div className='h-full text-lg bg-white w-full'>
                    <div className='max-w-screen-2lg mx-auto flex-between h-full px-6'>
                        <div className='flex-center h-full'>
                            <span
                                className='text-3xl md:mr-8 cursor-pointer'
                                onClick={() => {
                                    setDisplayNavList(!displayNavList);
                                    setDisplaySearch(false);
                                }}
                            >
                                {displayNavList ? (
                                    <IoMdClose />
                                ) : (
                                    <VscThreeBars />
                                )}
                            </span>
                            <Link href='/shop'>
                                <div className='flex-center cursor-pointer h-full relative group'>
                                    <a className='mr-2 invisible md:visible select-none'>
                                        SHOP
                                    </a>
                                    {displayShop && <Shop />}
                                    <span
                                        className={`hidden transition duration-100 md:block ${
                                            displayShop &&
                                            'group-hover:rotate-90'
                                        }`}
                                    >
                                        <MdArrowForwardIos />
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <Link href='/'>
                            <div className='h-full py-3 md:py-4 cursor-pointer select-none'>
                                <img
                                    src='/logo.svg'
                                    alt='Woven'
                                    className='h-full'
                                />
                            </div>
                        </Link>
                        <div className='flex-center relative'>
                            <span
                                className='text-2xl mr-6 md:hidden ml-2'
                                onClick={handleCart}
                            >
                                <FiShoppingCart />
                            </span>
                            <span
                                className='text-2xl cursor-pointer'
                                onClick={() => {
                                    setDisplaySearch(!displaySearch);
                                    setDisplayNavList(false);
                                }}
                            >
                                {displaySearch ? <RiCloseFill /> : <BiSearch />}
                            </span>
                            <a
                                className='ml-6 hidden relative cursor-pointer md:block select-none'
                                onClick={handleCart}
                            >
                                CART
                            </a>
                            {displayCart && (
                                <Cart
                                    setDisplayCart={setDisplayCart}
                                    setDisplayShop={setDisplayShop}
                                    displayShop={displayShop}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {displaySearch && (
                <Search
                    setDisplaySearch={setDisplaySearch}
                    setDisplayShop={setDisplayShop}
                />
            )}
            {displayNavList && <NavList />}
        </>
    );
}
export default Navbar;
