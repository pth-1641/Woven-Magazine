import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { BsPlus } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from '../../firebase/fetchData';
import { useRouter } from 'next/router';

function PostCategories({ title, firstLink, secondLink }) {
    const [categories, setCategories] = useState([]);
    const [display, setDisplay] = useState(false);
    const [searchCategory, setSearchCategory] = useState(null);

    const router = useRouter();

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    useEffect(() => {
        async function fetchCategory() {
            try {
                const categories = [];
                const querySnapshot = await getData('Stories');
                querySnapshot.forEach((doc) => {
                    categories.push(doc.data().category);
                });
                setCategories([...new Set(categories)].sort());
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchCategory();
    }, []);

    useEffect(() => {
        setSearchCategory(router.query.category ?? 'sort by');
    }, [router.query.category]);

    const searchByCategory = (category) => {
        router.push(`/story?category=${category.toLowerCase()}`);
    };

    return (
        <>
            <div className='flex-center flex-col'>
                <Image
                    src='/story-logo.png'
                    alt='Logo'
                    width={94}
                    height={20}
                />
                <h3 className='tracking-widest font-semibold text-xl mt-3 uppercase'>
                    {title}
                </h3>
            </div>

            <div className='max-w-5xl mx-auto mt-14 mb-10 tracking-wider md:flex-between'>
                <div className='w-full text-xs font-semibold uppercase md:w-48'>
                    <div
                        className='w-full flex-between pb-1 border-b border-black relative cursor-pointer'
                        onClick={toggleDisplay}
                    >
                        {searchCategory}
                        <span className='text-lg'>
                            <BsPlus />
                        </span>
                        {display && (
                            <ul className='absolute top-6 z-20 px-2 py-1 bg-emerald-200 w-full leading-5 max-h-64 overflow-y-scroll'>
                                {categories.map((category, key) => (
                                    <li
                                        key={key}
                                        className='cursor-pointer'
                                        onClick={() =>
                                            searchByCategory(category)
                                        }
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className='flex-center flex-col w-full mt-2 gap-y-1 md:flex-row md:max-w-max text-xs font-medium uppercase'>
                    <Link href={`/${firstLink}`}>
                        <a className='flex-between w-full md:mr-8 md:max-w-max'>
                            SEE {firstLink}
                            <span className='ml-0.5'>
                                <MdArrowForwardIos />
                            </span>
                        </a>
                    </Link>
                    <Link href={`/${secondLink ? secondLink : 'story'}`}>
                        <a className='flex-between w-full md:max-w-max'>
                            SEE {secondLink ? secondLink : 'ALL STORIES'}
                            <span className='ml-0.5'>
                                <MdArrowForwardIos />
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PostCategories;
