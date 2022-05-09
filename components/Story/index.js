import { useState, useEffect } from 'react';
import {
    getDataWithLimit,
    getNextData,
    getDataByCategory,
} from '../../firebase/fetchData';
import StoryPost from './StoryPost';
import PostCategories from '../PostCategories';
import { IoIosArrowDown } from 'react-icons/io';
import { useRouter } from 'next/router';

function Story() {
    const [lastDoc, setLastDoc] = useState(null);
    const [isMore, setIsMore] = useState(true);
    const [stories, setStories] = useState([]);

    const router = useRouter();
    const category = router.query.category;

    const handleLoadMore = async () => {
        let nextData = [];
        const next = await getNextData('Stories', 8, lastDoc);
        next.forEach((doc) => nextData.push(doc.data()));
        setLastDoc(next.docs[next.docs.length - 1]);
        setStories([...stories, ...nextData]);
        if (next.empty) {
            setIsMore(false);
        }
    };

    useEffect(() => {
        async function fetchData() {
            const firestoreData = [];
            const storiesData = await getDataWithLimit('Stories', 12);
            setLastDoc(storiesData.docs[storiesData.docs.length - 1]);
            storiesData.forEach((doc) => {
                firestoreData.push(doc.data());
            });
            setStories(firestoreData);
        }
        if (!category) fetchData();
    }, []);

    useEffect(() => {
        async function fetchDataByCategory() {
            const firestoreData = [];
            const dataByCategory = await getDataByCategory('Stories', category);
            dataByCategory.forEach((doc) => firestoreData.push(doc.data()));
            setStories(firestoreData);
        }
        if (category) fetchDataByCategory();
    }, [category]);

    return (
        <div className='w-full max-h-max bg-gray-200 py-12 px-5'>
            <div className='max-w-5xl mx-auto '>
                <PostCategories
                    title='the stories'
                    firstLink='films'
                    secondLink='blogs'
                />
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {stories.map((story) => (
                        <StoryPost key={story.id} story={story} />
                    ))}
                </ul>
                <div className='mt-8'>
                    {!category && isMore ? (
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
            </div>
        </div>
    );
}

export default Story;
