import { useState, useEffect } from 'react';
import Image from 'next/image';
import StoryItem from './StoryItem';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { MdArrowForwardIos } from 'react-icons/md';
import { BsPlus } from 'react-icons/bs';

function StoryList() {
    const firestoreData = [];
    const [stories, setStories] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // Fetching data from firestore
            const querySnapshot = await getDocs(collection(db, 'Stories'));
            querySnapshot.forEach((doc) => {
                firestoreData.push(doc.data());
            });
            setStories(firestoreData);

            // Fetching category
            const categoryArray = [
                ...new Set(firestoreData.map((story) => story.category)),
            ].sort();
            setCategories(categoryArray);
        }
        fetchData();
    }, []);

    return (
        <div className='w-full max-h-max bg-gray-200 py-12'>
            <div className='flex-center flex-col'>
                <Image
                    src='/story-logo.png'
                    alt='Logo'
                    width={94}
                    height={20}
                />
                <h3 className='tracking-widest font-semibold text-xl mt-3'>
                    THE STORIES
                </h3>
            </div>
            <div className='max-w-5xl flex-between mx-auto mt-14 mb-10 tracking-wider relative'>
                <div></div>
                <div className='sort-menu group'>
                    <div className='w-52 flex-between pb-1 border-b border-black'>
                        sort by
                        <span className='text-lg'>
                            <BsPlus />
                        </span>
                    </div>
                    <ul className='mt-2 hidden group-hover:block'>
                        {categories.map((category, key) => (
                            <li key={key} className='leading-5'>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-center'>
                    <div className='flex-center text-sm font-medium mr-8'>
                        SEE FILMS
                        <span className='ml-0.5'>
                            <MdArrowForwardIos />
                        </span>
                    </div>
                    <div className='flex-center text-sm font-medium'>
                        SEE ALL STORIES
                        <span className='ml-0.5'>
                            <MdArrowForwardIos />
                        </span>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl grid grid-cols-2 mx-auto gap-10'>
                {stories.map((story, key) => (
                    <StoryItem story={story} key={key} />
                ))}
            </div>
        </div>
    );
}

export default StoryList;
