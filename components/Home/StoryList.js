import { useState, useEffect } from 'react';
import Image from 'next/image';
import StoryItem from './StoryItem';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { MdArrowForwardIos } from 'react-icons/md';
import { BsPlus } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

function StoryList() {
    const firestoreData = [];
    const [stories, setStories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [display, setDisplay] = useState(false);
    const [loadMoreLength, setLoadMoreLength] = useState(8);
    const [maxStoryLength, setMaxStoryLength] = useState(0);

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    useEffect(() => {
        async function fetchData() {
            // Fetching data from firestore
            const querySnapshot = await getDocs(collection(db, 'Stories'));
            querySnapshot.forEach((doc) => {
                firestoreData.push(doc.data());
            });
            setStories(firestoreData);
            setMaxStoryLength(firestoreData.length);

            // Fetching category
            const categoryArray = [
                ...new Set(firestoreData.map((story) => story.category)),
            ].sort();
            setCategories(categoryArray);
        }
        fetchData();
    }, []);

    return (
        <div className="w-full max-h-max bg-gray-200 py-12 px-7">
            <div className="flex-center flex-col">
                <Image
                    src="/story-logo.png"
                    alt="Logo"
                    width={94}
                    height={20}
                />
                <h3 className="tracking-widest font-semibold text-xl mt-3">
                    THE STORIES
                </h3>
            </div>

            <div className="max-w-5xl mx-auto mt-14 mb-10 tracking-wider md:flex-between">
                <div className="w-full text-xs font-semibold uppercase md:w-48">
                    <div
                        className="w-full flex-between pb-1 border-b border-black relative"
                        onClick={toggleDisplay}
                    >
                        SORT BY
                        <span className="text-lg">
                            <BsPlus />
                        </span>
                        {display && (
                            <ul className="absolute top-6 z-20 px-2 py-1 bg-emerald-200 w-full leading-5 max-h-64 overflow-y-scroll">
                                {categories.map((category, key) => (
                                    <li key={key}>{category}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex-center flex-col w-full mt-2 gap-y-1 md:flex-row md:max-w-max">
                    <div className="flex-between text-sm font-medium w-full md:mr-8 md:max-w-max">
                        SEE FILMS
                        <span className="ml-0.5">
                            <MdArrowForwardIos />
                        </span>
                    </div>
                    <div className="flex-between text-sm font-medium w-full md:max-w-max">
                        SEE ALL STORIES
                        <span className="ml-0.5">
                            <MdArrowForwardIos />
                        </span>
                    </div>
                </div>
            </div>

            {/* Story posts */}
            <div className="max-w-5xl grid grid-cols-1 mx-auto gap-10 md:grid-cols-2 2xl:grid-cols-4 2xl:max-w-9xl pb-12">
                {stories.slice(0, loadMoreLength).map((story, key) => (
                    <StoryItem story={story} key={key} />
                ))}
            </div>
            {loadMoreLength < maxStoryLength && (
                <p
                    className="flex-center font-semibold text-sm tracking-wider cursor-pointer w-max mx-auto"
                    onClick={() => setLoadMoreLength(loadMoreLength + 4)}
                >
                    MORE STORIES
                    <span className="ml-2">
                        <IoIosArrowDown />
                    </span>
                </p>
            )}
        </div>
    );
}

export default StoryList;
