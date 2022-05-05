import Link from 'next/link';

function About() {
    return (
        <div className='bg-gray-100'>
            <h1 className='footer-title py-10'>
                <span className='block'> THE STORIES</span> WITHIN US
            </h1>
            <div className='bg-white py-12'>
                <div className='mx-auto max-w-xl px-6 lg:max-w-5xl lg:flex-between'>
                    <div className='w-full max-w-md'>
                        <div>
                            <h3 className='font-semibold font-mono text-lg'>
                                A COMMON THREAD
                            </h3>
                            <p className='font-serif font-light mt-2 mb-4 text-sm'>
                                The stories of our lives weave in and out like
                                fabric through a quilt. Together they spin
                                themes common to all of humanity. Themes of fear
                                and triumph, love and risk, joy and heartache.
                                Together they comprise the human experience.
                                Before the written word existed, there was oral
                                tradition. Central to this tradition was a deep
                                rooted conviction that story structured society;
                                it explained origin, defined ethics, and created
                                entertainment.
                                <br />
                                <br />
                                Woven blooms out of this tradition. It seeks to
                                capture the stories of artists, designers, and
                                entrepreneurs of all kinds. It is founded upon
                                the idea that what we often lack in ourselves,
                                we find in others, and by observing the great
                                thinkers history has passed on to us.
                            </p>
                            <h4 className='font-semibold'>JEREMY + CHRISTI</h4>
                            <em className='font-serif text-sm'>
                                Founders of Woven
                            </em>
                        </div>
                        <hr className='my-6' />
                        <div>
                            <h3 className='font-semibold font-mono text-lg mb-2'>
                                THE FOUNDERS:
                            </h3>
                            <div className='grid grid-cols-2 gap-3'>
                                <figure>
                                    <img
                                        src='https://i.ibb.co/w4vxBKj/jeremy-team-web2.jpg'
                                        alt='founder'
                                    />
                                    <figcaption className='text-center font-semibold mt-2'>
                                        JEREMY BARNES
                                        <em className='block text-sm font-serif text-gray-500'>
                                            Creative Director & Lead Designer
                                        </em>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <img
                                        src='https://i.ibb.co/k3FZ6jX/christi-team-web.jpg'
                                        alt='founder'
                                    />
                                    <figcaption className='text-center font-semibold mt-2'>
                                        CHRISTI BARNES
                                        <em className='block text-sm font-serif text-gray-500'>
                                            Managing Editor
                                        </em>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <hr className='my-6' />
                        <div>
                            <h3 className='font-semibold font-mono text-lg'>
                                JOIN OUR COMMUNITY
                            </h3>
                            <p className='text-sm mt-1'>
                                Like us on{' '}
                                <span className='text-highlight'>FACEBOOK</span>
                                , tweet us on{' '}
                                <span className='text-highlight'>TWITTER</span>,
                                or follow us around on
                                <span className='text-highlight'>
                                    INSTAGRAM
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                    <div className='w-full hidden mt-5 self-start md:block lg:max-w-[250px]'>
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
                            <Link href='/interview'>
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

export default About;
