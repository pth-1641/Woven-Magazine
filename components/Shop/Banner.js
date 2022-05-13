import Link from 'next/link'

function Banner() {
    return (
        <div
            className='w-full min-h-[calc(100vh-2.75rem)] bg-cover bg-center flex-center text-white relative font-semibold md:min-h-[calc(100vh-3.5rem)]'
            style={{
                backgroundImage:
                    'url("https://i.ibb.co/xf6yVzB/Issue4-Banner-Cover2.jpg")',
            }}
        >
            <div className='flex-center flex-col'>
                <h1 className='font-serif text-4xl md:text-6xl'>
                    future <span className='font-thin'>—</span> past
                </h1>
                <Link href="/shop/6">
                <a
                    type='button'
                    className='border-2 border-white font-medium px-8 py-1.5 mt-6 duration-500 hover:text-black hover:bg-white'
                >
                    CHECK IT OUT
                </a>
                </Link>
            </div>
            <div className='absolute bottom-10 max-w-screen-2lg w-full text-sm tracking-wider px-10 hidden md:flex-between'>
                <h2>SHIPS WORLDWIDE</h2>
                <h2>WHOLESALE AVAILABLE</h2>
            </div>
        </div>
    );
}

export default Banner;
