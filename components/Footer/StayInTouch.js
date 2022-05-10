import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function StayInTouch({ setDisplay }) {
    const [isConfirm, setIsConfirm] = useState(false);
    const [emailVal, setEmailVal] = useState('');
    const [borderColor, setBorderColor] = useState('border-gray-400');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!emailVal.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) || !emailVal) {
            setBorderColor('border-red-500');
            return;
        }
        setIsConfirm(true);
        setEmailVal('');
    };

    const handleCloseModal = () => {
        setDisplay(false);
        setIsConfirm(false);
        setBorderColor('border-gray-400');
    };

    return (
        <div className='hidden lg:flex-center fixed inset-0 bg-white-0.9 z-50 duration-300'>
            <div className='w-full max-w-2xl bg-white p-4 shadow-xl relative'>
                {isConfirm ? (
                    <div className='flex-center flex-col gap-y-5 py-28'>
                        <h3 className='text-xl font-medium'>
                            THANKS FOR SUBSCRIBING
                        </h3>
                        <p className='font-serif font-thin text-sm'>
                            You’re all set. We will be in touch soon with a
                            confirmation email.
                        </p>
                        <button
                            className='btn w-44'
                            type='button'
                            onClick={handleCloseModal}
                        >
                            DONE
                        </button>
                    </div>
                ) : (
                    <>
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
                                Between our travels and telling the stories
                                behind these extraordinary makers, there’s
                                always something new to share. Get updates on
                                who we’re meeting and where we’re headed next in
                                our monthly newsletter!
                            </p>
                            <form className='grid grid-cols-2 gap-x-2'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className={`border ${borderColor} px-2 outline-none`}
                                    value={emailVal}
                                    onChange={(e) =>
                                        setEmailVal(e.target.value)
                                    }
                                />
                                <button
                                    className='btn py-2'
                                    type='submit'
                                    onClick={(e) => handleSubscribe(e)}
                                >
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>
                    </>
                )}
                <span
                    className='absolute -top-6 -right-6 text-3xl cursor-pointer'
                    onClick={handleCloseModal}
                >
                    <AiOutlineCloseCircle />
                </span>
            </div>
        </div>
    );
}

export default StayInTouch;
