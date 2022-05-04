import { useState, useEffect } from 'react';
import { getDataWithLimit } from '../../firebase/fetchData';
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';

function Feature() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDataWithLimit('Blogs', 4);
            querySnapshot.forEach((doc) => {
                setBlogs((prev) => [...prev, { id: doc.id, ...doc.data() }]);
            });
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
                {blogs.map((blog) => (
                    <article key={blog.id}>
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
            <div className='w-full mx-auto'>
                <Link href='/blogs'>
                    <a className='section-title text-xs flex-center text-emerald-500 pt-8 pb-5'>
                        VISIT BLOG <MdArrowForwardIos />
                    </a>
                </Link>
            </div>
            <hr className='border-t w-1/2 max-w-lg border-neutral-400 mx-auto' />
        </div>
    );
}

export default Feature;
