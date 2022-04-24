import { useState } from 'react';
import Link from 'next/link';
import StayInTouch from './StayInTouch';

function Footer({ footerRef }) {
    const [display, setDisplay] = useState(false);

    return (
        <div
            className='w-full bg-zinc-200 py-12 text-xs font-semibold md:pb-32'
            ref={footerRef}
        >
            <ul className='grid grid-cols-1 gap-2 mx-auto max-w-5xl text-center lg:grid-cols-6'>
                <li>
                    <Link href='/collaborate'>
                        <a>Collaborate With Us</a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        <a>Contact Us</a>
                    </Link>
                </li>
                <li
                    className='cursor-pointer hidden lg:block'
                    onClick={() => setDisplay(true)}
                >
                    Stay In Touch!
                </li>
                <li>
                    <Link href='/faq'>
                        <a>FAQ</a>
                    </Link>
                </li>

                <li>
                    <Link href='/term-conditions'>
                        <a>Terms &#38; Conditions</a>
                    </Link>
                </li>
                <li className='font-serif'>
                    &#169; WOVEN {new Date().getFullYear()}
                </li>
            </ul>
            <StayInTouch setDisplay={setDisplay} display={display} />
        </div>
    );
}

export default Footer;
