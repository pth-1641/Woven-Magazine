import { useState, useEffect } from 'react';
import StoryItem from './StoryItem';
import { getData } from '../../firebase/fetchData';
import { IoIosArrowDown } from 'react-icons/io';
import PostCategories from '../PostCategories';

function StoryList() {
    const [stories, setStories] = useState([]);

    const [loadMoreLength, setLoadMoreLength] = useState(8);
    const [maxStoryLength, setMaxStoryLength] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const firestoreData = [];
            const querySnapshot = await getData('Stories');
            querySnapshot.forEach((doc) => {
                firestoreData.push(doc.data());
            });
            setStories(firestoreData);
            setMaxStoryLength(firestoreData.length);
        }
        fetchData();
    }, []);

    return (
        <div className='w-full max-h-max bg-gray-200 py-12 px-7'>
            <PostCategories title='the stories' firstLink='films' />
            <div className='max-w-5xl grid grid-cols-1 mx-auto gap-10 md:grid-cols-2 2xl:grid-cols-4 2xl:max-w-9xl pb-12'>
                {stories.slice(0, loadMoreLength).map((story, key) => (
                    <StoryItem story={story} key={key} />
                ))}
            </div>
            {loadMoreLength < maxStoryLength && (
                <p
                    className='flex-center font-semibold text-sm tracking-wider cursor-pointer w-max mx-auto'
                    onClick={() => setLoadMoreLength(loadMoreLength + 4)}
                >
                    MORE STORIES
                    <span className='ml-2'>
                        <IoIosArrowDown />
                    </span>
                </p>
            )}
        </div>
    );
}

export default StoryList;
