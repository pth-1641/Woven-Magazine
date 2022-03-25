import { AiOutlineCloseCircle } from 'react-icons/ai';

function StayInTouch({ setDisplay, display }) {
    const fadedEffect = display ? 'opacity-100 visible' : 'invisible opacity-0';

    return (
        <div
            className={`hidden lg:flex-center fixed inset-0 bg-white-0.9 z-50 transition duration-300 ${fadedEffect}`}
        >
            <div
                className={`w-full max-w-2xl bg-white p-4 shadow-xl relative ${fadedEffect}`}
            >
                <div
                    className='h-72 bg-cover bg-center flex-center'
                    style={{
                        backgroundImage: `url("https://i.ibb.co/hLmwXM6/newsletter.jpg")`,
                    }}
                >
                    <h3 className='text-white text-xl font-medium'>
                        FOLLOW OUR JOURNEY
                    </h3>
                </div>
                <div className='max-w-md mx-auto'>
                    <p className='font-serif text-xs text-center font-medium leading-5 my-3'>
                        Between our travels and telling the stories behind these
                        extraordinary makers, there’s always something new to
                        share. Get updates on who we’re meeting and where we’re
                        headed next in our monthly newsletter!
                    </p>
                    <form className='grid grid-cols-2 gap-x-2'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='border border-gray-400 px-2 outline-none'
                            required
                        />
                        <button className='btn py-2' type='submit'>
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
                <span
                    className='absolute -top-6 -right-6 text-3xl cursor-pointer'
                    onClick={() => setDisplay(false)}
                >
                    <AiOutlineCloseCircle />
                </span>
            </div>
        </div>
    );
}

export default StayInTouch;
