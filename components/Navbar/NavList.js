import Link from 'next/link';

function NavList() {
    return (
        <div className='fixed inset-0 top-10 bg-white-0.9 z-30 flex-center justify-start flex-col select-none md:top-14'>
            <ul className='flex-center flex-col gap-y-5 py-10 md:py-4'>
                <li className='text-center'>
                    <em className='text-emerald-600 font-serif hidden md:block'>
                        .01
                    </em>
                    <Link href='/story'>
                        <a className='nav-item'>STORIES</a>
                    </Link>
                </li>
                <li className='text-center'>
                    <em className='text-emerald-600 font-serif hidden md:block'>
                        .02
                    </em>
                    <Link href='/films'>
                        <a className='nav-item'>FILMS</a>
                    </Link>
                </li>
                <li className='text-center'>
                    <em className='text-emerald-600 font-serif hidden md:block'>
                        .03
                    </em>
                    <Link href='/shop'>
                        <a className='nav-item'>SHOP</a>
                    </Link>
                </li>
                <li className='text-center'>
                    <em className='text-emerald-600 font-serif hidden md:block'>
                        .04
                    </em>
                    <Link href='/blogs'>
                        <a className='nav-item'>BLOG</a>
                    </Link>
                </li>
                <li className='text-center'>
                    <em className='text-emerald-600 font-serif hidden md:block'>
                        .05
                    </em>
                    <Link href='/about'>
                        <a className='nav-item'>ABOUT</a>
                    </Link>
                </li>
            </ul>
            <Link href='/interview'>
                <a type='button' className='btn px-8 md:mt-2'>
                    REQUEST INTERVIEW
                </a>
            </Link>
            <div className='flex-center flex-wrap italic font-serif gap-x-14 mt-6'>
                <a href='https://github.com/pth-1641' target='_blank'>
                    github
                </a>
                <a href='https://www.facebook.com/pth.1641' target='_blank'>
                    facebook
                </a>
                <a href='https://www.instagram.com/pth_1641' target='_blank'>
                    instagram
                </a>
            </div>
        </div>
    );
}

export default NavList;
