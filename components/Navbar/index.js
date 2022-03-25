import { useState } from 'react';
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

    return (
        <>
            <div className="navbar">
                <div className="max-w-screen-2lg mx-auto flex-between h-full font-normal text-lg">
                    <div className="flex-center h-full">
                        <span
                            className="text-3xl md:mr-8 cursor-pointer"
                            onClick={() => {
                                setDisplayNavList(!displayNavList);
                                setDisplaySearch(false);
                            }}
                        >
                            {displayNavList ? <IoMdClose /> : <VscThreeBars />}
                        </span>
                        <a className="mr-2 hidden md:block">SHOP</a>
                        <span className="hidden md:block">
                            <MdArrowForwardIos />
                        </span>
                    </div>
                    <Link href="/">
                        <img
                            src="https://wovenmagazine.com/content/themes/woven/assets/svg/logo.svg"
                            alt="Woven"
                            className="h-full py-3 md:py-4 cursor-pointer"
                        />
                    </Link>
                    <div className="flex-center relative">
                        <span className="text-2xl mr-6 md:hidden">
                            <FiShoppingCart />
                        </span>
                        <span
                            className="text-2xl cursor-pointer"
                            onClick={() => {
                                setDisplaySearch(!displaySearch);
                                setDisplayNavList(false);
                            }}
                        >
                            {displaySearch ? <RiCloseFill /> : <BiSearch />}
                        </span>
                        <a
                            className="ml-6 hidden relative cursor-pointer md:block select-none"
                            onClick={() => setDisplayCart(!displayCart)}
                        >
                            CART
                        </a>
                        {displayCart && (
                            <Cart setDisplayCart={setDisplayCart} />
                        )}
                    </div>
                </div>
            </div>
            {displaySearch && <Search setDisplaySearch={setDisplaySearch} />}
            {displayNavList && <NavList />}
            <Shop />
        </>
    );
}
export default Navbar;
