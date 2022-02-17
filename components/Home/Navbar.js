import { MdArrowForwardIos } from 'react-icons/md';
import { VscThreeBars } from 'react-icons/vsc';
import { BiSearch } from 'react-icons/bi';

function Navbar() {
    return (
        <div className='w-full bg-white h-14 shadow shadow-zinc-100 fixed top-0 z-50'>
            <div className='max-w-screen-2lg mx-auto flex-between h-full'>
                <div className='flex-center h-full'>
                    <span className='text-3xl mr-8'>
                        <VscThreeBars />
                    </span>
                    <a className='font-medium text-lg mr-2'>SHOP</a>
                    <MdArrowForwardIos />
                </div>
                <img
                    src='https://wovenmagazine.com/content/themes/woven/assets/svg/logo.svg'
                    alt='Woven'
                    className='h-full py-4'
                />
                <div className='flex-center'>
                    <span className='text-2xl'>
                        <BiSearch />
                    </span>
                    <a className='font-medium text-lg ml-6'>CART</a>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
