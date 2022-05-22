import Link from 'next/link';

function Contact() {
    return (
        <div className='w-full pt-20 bg-gray-100'>
            <h1 className='footer-title'>
                TELL US YOUR<span className='block'>THOUGHTS</span>
            </h1>
            <div className='w-full bg-white py-10 md:pb-24'>
                <div className='max-w-xl px-5 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:max-w-5xl lg:px-10'>
                    <div className='md:mb-8'>
                        <h3 className='info-title mb-2'>GENERAL QUESTIONS</h3>
                        <p className='info-detail'>
                            For any questions, press inquiries, requests, or
                            comments you may have please contact:
                            <a className='text-highlight'>
                                {' '}
                                HELLO@WOVENMAGAZINE.COM.
                            </a>
                        </p>
                        <hr className='border-gray-400 my-7' />
                        <h3 className='info-title mb-2'>JOIN OUR COMMUNITY</h3>
                        <p className='info-detail'>
                            Show Woven some social love. Like us on{' '}
                            <span className='text-highlight'>FACEBOOK</span>,
                            tweet us on{' '}
                            <span className='text-highlight'>TWITTER</span>, or
                            follow us around on{' '}
                            <span className='text-highlight'>INSTAGRAM</span>.
                        </p>
                    </div>
                    <div className='w-full hidden md:block lg:w-64 lg:ml-auto'>
                        <h3 className='info-title lg:text-base'>
                            COLLABORATE WITH US
                        </h3>
                        <hr className='border-gray-400 mt-1' />
                        <div className='flex flex-between lg:block'>
                            <p className='text-sm my-3 w-80 lg:w-auto'>
                                We also provide opportunities to collaborate on
                                video, photography, and writing.
                            </p>
                            <Link href='/collaborate'>
                                <a
                                    type='button'
                                    className='btn text-xs w-48 min-w-max text-center'
                                >
                                    COLLABORATE
                                </a>
                            </Link>
                        </div>
                        <h3 className='info-title mt-10 lg:text-base'>
                            REQUEST AN INTERVIEW
                        </h3>
                        <hr className='border-gray-400 mt-1' />
                        <div className='flex flex-between lg:block'>
                            <p className='text-sm my-3 w-80 lg:w-auto'>
                                Have a story, tattoo, or dwelling, you’d like to
                                share with us, then request an interview.
                            </p>
                            <Link href='/interview' passHref>
                                <button
                                    type='button'
                                    className='btn text-center text-xs w-48 px-5 min-w-max'
                                >
                                    REQUEST AN INTERVIEW
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
