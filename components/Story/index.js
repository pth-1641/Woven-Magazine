import { useState, useEffect } from 'react';
import { getDataWithLimit, getScrollData } from '../../firebase/fetchData';
import StoryPost from './StoryPost';
import PostCategories from '../PostCategories';
import {
    collection,
    query,
    orderBy,
    startAfter,
    limit,
    getDocs,
} from 'firebase/firestore/lite';
import db from '../../firebase';

function Story({ footerHeight }) {
    const [stories, setStories] = useState([]);
    const [lastData, setLastData] = useState(null);

    const fetchFirstData = async () => {
        const firestoreData = [];
        const querySnapshot = await getDataWithLimit('Stories', 8);
        querySnapshot.forEach((doc) => {
            firestoreData.push(doc.data());
        });
        console.log('first data');
        setStories(firestoreData);
        setLastData(querySnapshot.docs[querySnapshot.docs.length - 1]);
    };
    console.log('function');
    console.log(lastData);

    const fetchNextData = async () => {
        const nextData = [];
        console.log('next data');
        console.log(lastData);
        // const nextDataScroll = await getScrollData('Stories', 1);
        // nextDataScroll.forEach((doc) => data.push(doc.data()));
        // lastVisible = nextDataScroll.docs[nextDataScroll.docs.length - 1];
        // const next = query(
        //     collection(db, 'Stories'),
        //     startAfter(lastVisible),
        //     limit(1)
        // );
        // const a = await getDocs(next);
        // a.forEach((doc) => data.push(doc.data()));
        // setStories(data);
        // const queryNextSnapshot = await getScrollData('Stories', lastData, 8);
        // queryNextSnapshot.forEach((doc) => console.log(doc.data()));
        // console.log(data);
    };

    const handleScroll = (e) => {
        const curPosition = e.target.documentElement.scrollTop;
        const totalHeight = e.target.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        if (windowHeight + curPosition + footerHeight >= totalHeight) {
            fetchNextData();
        }
        console.log('scroll');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        fetchFirstData();
        console.log('effect');
    }, []);

    return (
        <div className='w-full max-h-max bg-gray-200 py-12 px-7'>
            <div className='max-w-5xl mx-auto '>
                <PostCategories
                    title='the stories'
                    firstLink='films'
                    secondLink='blogs'
                />
                <ul className='grid grid-cols-4 gap-6'>
                    {stories.map((story) => (
                        <StoryPost key={story.id} story={story} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Story;
