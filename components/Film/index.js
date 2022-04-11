import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsPlus } from 'react-icons/bs';
import { MdArrowForwardIos } from 'react-icons/md';
import { getData } from '../../firebase';

function Film() {
    const [display, setDisplay] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // Fetching category from firestore
            const firestoreData = [];
            const querySnapshot = await getData('Stories');
            querySnapshot.forEach((doc) => {
                firestoreData.push(doc.data().category);
            });
            setCategories([...new Set(firestoreData)].sort());
        }
        fetchData();
    }, []);

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    return (
        <div className='bg-gray-100 p-5 md:p-10'>
            <div className='max-w-5xl mx-auto'>
                <iframe
                    className='w-full aspect-video'
                    src='https://player.vimeo.com/video/159979936?title=0&byline=0&portrait=0'
                    allowFullScreen
                    frameBorder={0}
                    loading='lazy'
                />
                <div className='flex-center flex-col'>
                    <Image
                        src='/story-logo.png'
                        alt='logo'
                        width={93}
                        height={20}
                    />
                    <h1 className='font-medium text-xl tracking-widest mt-4 mb-10'>
                        THE FILMS
                    </h1>
                </div>
                <div className='mt-14 mb-10 tracking-wider md:flex-between'>
                    <div className='w-full text-xs font-semibold uppercase md:w-48'>
                        <div
                            className='w-full flex-between pb-1 border-b border-black relative cursor-pointer'
                            onClick={toggleDisplay}
                        >
                            SORT BY
                            <span className='text-lg'>
                                <BsPlus />
                            </span>
                            {display && (
                                <ul className='absolute top-6 z-20 px-2 py-1 bg-emerald-200 w-full leading-5 max-h-64 overflow-y-scroll'>
                                    {categories.map((category, key) => (
                                        <li
                                            key={key}
                                            className='cursor-pointer'
                                        >
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className='flex-center flex-col w-full mt-2 gap-y-1 md:flex-row md:max-w-max text-xs font-medium'>
                        <Link href='/blog'>
                            <a className='flex-between w-full md:mr-8 md:max-w-max'>
                                SEE BLOGS
                                <span className='ml-0.5'>
                                    <MdArrowForwardIos />
                                </span>
                            </a>
                        </Link>
                        <Link href='/story'>
                            <a className='flex-between w-full md:max-w-max'>
                                SEE ALL STORIES
                                <span className='ml-0.5'>
                                    <MdArrowForwardIos />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <Link href='/film/apple-pies'>
                    <a className='grid grid-cols-2'>
                        <div className='w-full bg-white p-5 hover:bg-cyan-100'>
                            <h2 className='card-title'>
                                Salted Caramel Apple Hand Pies
                            </h2>
                            <p className='text-sm mt-2'>
                                Excerpts are optional hand-crafted summaries of
                                your content that can be used in your theme.
                            </p>
                            <time className='font-serif italic text-sm text-right font-semibold block'>
                                .10.29.14.
                            </time>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Film;
