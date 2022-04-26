import { useState, useEffect } from 'react';
import StoryItem from './StoryItem';
import {
    getDataWithLimit,
    getNextData,
    getData,
} from '../../firebase/fetchData';
import { IoIosArrowDown } from 'react-icons/io';
import PostCategories from '../PostCategories';
import { getDocs } from 'firebase/firestore/lite';

function StoryList() {
    const [stories, setStories] = useState([]);
    const [lastDoc, setLastDoc] = useState(null);
    const [loadMoreLength, setLoadMoreLength] = useState(0);
    const [maxStoryLength, setMaxStoryLength] = useState(0);

    useEffect(() => {
        const firestoreData = [];
        async function fetchData() {
            const storiesData = await getDataWithLimit('Stories', 8);
            setLastDoc(storiesData.docs[storiesData.docs.length - 1]);
            storiesData.forEach((doc) => {
                firestoreData.push(doc.data());
            });
            setStories(firestoreData);
            // setMaxStoryLength(maxLength);
        }
        fetchData();
    }, []);

    const handleLoadMore = async () => {
        let nextData = [];
        const next = await getNextData('Stories', 8, lastDoc);
        next.forEach((doc) => nextData.push(doc.data()));
        setLastDoc(next.docs[next.docs.length - 1]);
        setStories([...stories, ...nextData]);
    };

    return (
        <div className='w-full max-h-max bg-gray-200 py-12 px-7'>
            <PostCategories title='the stories' firstLink='films' />
            <div className='max-w-5xl grid grid-cols-1 mx-auto gap-10 md:grid-cols-2 2xl:grid-cols-4 2xl:max-w-9xl pb-12'>
                {stories.map((story, key) => (
                    <StoryItem story={story} key={key} />
                ))}
            </div>
            {/* {loadMoreLength < maxStoryLength && ( */}
            <p
                className='flex-center font-semibold text-sm tracking-wider cursor-pointer w-max mx-auto'
                onClick={handleLoadMore}
            >
                MORE STORIES
                <span className='ml-2'>
                    <IoIosArrowDown />
                </span>
            </p>
            {/* )} */}
        </div>
    );
}

export default StoryList;
