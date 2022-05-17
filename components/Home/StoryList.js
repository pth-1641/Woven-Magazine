import { useState, useEffect } from 'react';
import StoryItem from './StoryItem';
import { getDataWithLimit, getNextData } from '../../firebase/fetchData';
import { IoIosArrowDown } from 'react-icons/io';
import PostCategories from '../PostCategories';

function StoryList() {
    const [lastDoc, setLastDoc] = useState(null);
    const [isMore, setIsMore] = useState(true);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const firestoreData = [];
                const storiesData = await getDataWithLimit('Stories', 8);
                setLastDoc(storiesData.docs[storiesData.docs.length - 1]);
                storiesData.forEach((doc) => {
                    firestoreData.push(doc.data());
                });
                setStories(firestoreData);
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchData();
    }, []);

    const handleLoadMore = async () => {
        try {
            let nextData = [];
            const next = await getNextData('Stories', 8, lastDoc);
            next.forEach((doc) => nextData.push(doc.data()));
            setLastDoc(next.docs[next.docs.length - 1]);
            setStories([...stories, ...nextData]);
            if (next.empty) {
                setIsMore(false);
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className='w-full max-h-max bg-gray-200 py-12 px-5'>
            <PostCategories title='the stories' firstLink='films' />
            <div className='max-w-5xl grid grid-cols-1 mx-auto gap-10 md:grid-cols-2 2xl:grid-cols-4 2xl:max-w-9xl pb-12'>
                {stories.map((story, key) => (
                    <StoryItem story={story} key={key} />
                ))}
            </div>
            {isMore ? (
                <p
                    className='flex-center font-semibold text-sm tracking-wider cursor-pointer w-max mx-auto'
                    onClick={handleLoadMore}
                >
                    MORE STORIES
                    <span className='ml-2'>
                        <IoIosArrowDown />
                    </span>
                </p>
            ) : (
                <h5 className='text-center text-gray-500 font-semibold'>
                    No More Stories
                </h5>
            )}
        </div>
    );
}

export default StoryList;
