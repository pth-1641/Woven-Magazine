import { useState, useEffect } from 'react';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { MdArrowForwardIos } from 'react-icons/md';

function Feature() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const firestoreData = [];
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, 'Blogs'));
            querySnapshot.forEach((doc) => {
                firestoreData.push(doc.data());
            });
            setBlogs(firestoreData.slice(0, 4));
        }
        fetchData();
    }, []);

    return (
        <div className='w-full bg-gray-200 py-10'>
            <hr className='border-t max-w-lg border-neutral-400 mx-auto' />
            <h2 className='section-title text-center pt-5 pb-8'>
                FEATURED BLOG POSTS
            </h2>
            <div className='grid grid-cols-2 gap-6 max-w-3xl mx-auto px-6 md:grid-cols-4'>
                {blogs.map((blog, index) => (
                    <article key={index}>
                        <img
                            className='aspect-square object-cover object-center'
                            src={blog.thumbnail}
                        />
                        <h3 className='font-serif hidden font-medium my-2 leading-tight md:block'>
                            {blog.title}
                        </h3>
                        <p className='text-xs hidden tracking-wider font-medium md:block'>
                            {blog.overview}
                        </p>
                    </article>
                ))}
            </div>
            <h3 className='section-title text-xs text-emerald-500 flex-center pt-8 pb-5 '>
                VISIT BLOG <MdArrowForwardIos />
            </h3>
            <hr className='border-t w-1/2 max-w-lg border-neutral-400 mx-auto' />
        </div>
    );
}

export default Feature;
