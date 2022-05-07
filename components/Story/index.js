import { useState, useEffect } from 'react';
import { getDataWithLimit, getNextData } from '../../firebase/fetchData';
import StoryPost from './StoryPost';
import PostCategories from '../PostCategories';

function Story({ footerHeight }) {
    const [stories, setStories] = useState([]);
    const [lastDoc, setLastDoc] = useState(null);

    const fetchNextData = async () => {
        // window.removeEventListener('scroll', handleScroll);
        // const next = await getNextData('Stories', 8, lastDoc);
        // next.forEach((doc) => setStories((prev) => [...prev, doc.data()]));
        // setLastDoc(next.docs[next.docs.length - 1]);
        console.log(lastDoc);
    };

    const handleScroll = (e) => {
        const curPosition = e.target.documentElement.scrollTop;
        const totalHeight = e.target.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        if (windowHeight + curPosition + footerHeight + 0 >= totalHeight) {
            fetchNextData();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        async function fetchData() {
            const firestoreData = [];
            const storiesData = await getDataWithLimit('Stories', 8);
            setLastDoc(storiesData.docs[storiesData.docs.length - 1]);
            storiesData.forEach((doc) => {
                firestoreData.push(doc.data());
            });
            setStories(firestoreData);
        }
        fetchData();

        // return window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {}, []);

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
            </div>
        </div>
    );
}

export default Story;
