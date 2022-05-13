import Link from 'next/link';

function Custom404() {
    return (
        <div className='flex-center flex-col gap-3 h-screen -mt-14 px-5'>
            <h1 className='text-xl text-center'>
                <span className='font-semibold'>404</span> | This page could not
                be found
            </h1>
            <Link href='/'>
                <a className='btn-outline'>GO BACK HOME</a>
            </Link>
        </div>
    );
}

export default Custom404;
