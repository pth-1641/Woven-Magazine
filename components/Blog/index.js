import Image from 'next/image';
import Link from 'next/link';
import { getData } from '../../firebase/fetchData';
import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const firestoreData = [];
            const querySnapshot = await getData('Blogs');
            querySnapshot.forEach((doc) => {
                firestoreData.push(doc.data());
            });
            setBlogs(firestoreData);
        }
        fetchData();
    }, []);

    return (
        <div className='bg-gray-100 p-5 md:p-10'>
            <div className='max-w-5xl mx-auto'>
                <div className='flex-center flex-col'>
                    <Image
                        src='/story-logo.png'
                        alt='logo'
                        width={93}
                        height={20}
                    />
                    <h1 className='font-medium text-xl tracking-widest mt-4 mb-10'>
                        THE BLOG
                    </h1>
                </div>
                <div className='w-full lg:grid lg:grid-cols-10 gap-x-10'>
                    <div className='lg:col-span-7'>
                        <ul>
                            {blogs.map((blog) => (
                                <>
                                    <BlogPost blog={blog} />
                                    <div className='flex-center last:hidden'>
                                        <Image
                                            src='/x-double.png'
                                            alt='xx'
                                            width={18}
                                            height={8}
                                        />
                                        <hr className='my-9 border-gray-300 w-full mx-4' />
                                        <Image
                                            src='/x-double.png'
                                            alt='xx'
                                            width={18}
                                            height={8}
                                        />
                                    </div>
                                </>
                            ))}
                        </ul>
                        <div
                            className='bg-white flex-center text-gray-400 text-sm font-semibold
                        gap-x-1 py-3 mt-6'
                        >
                            <div className='border border-gray-400 px-3 py-1'>
                                PAGE 1 OF 1
                            </div>
                            <div className='border border-gray-400 px-3 py-1'>
                                1
                            </div>
                        </div>
                    </div>
                    <div className='w-full hidden lg:block lg:col-span-3'>
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
                        <h3 className='info-title mt-10 lg:text-base'>
                            JOIN OUR COMMUNITY
                        </h3>
                        <hr className='border-gray-400 mt-1' />
                        <p className='text-sm my-3 w-80 lg:w-auto'>
                            Show woven some social love. Like us on
                            <a className='text-highlight'> FACEBOOK</a>, follow
                            us on
                            <a className='text-highlight'> TWITTER</a>, or waste
                            endless, wonderful hours with us on
                            <a className='text-highlight'> TUMBLUR</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
