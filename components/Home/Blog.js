import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import useStore from '../../appStore/store';
import { useRouter } from 'next/router';

function Blog({ blogs }) {
    const router = useRouter();
    const blogInfo = useStore((state) => state.setBlogInfo);

    const handleBlogDetail = (blog) => {
        blogInfo(blog.title, blog.time);
        localStorage.setItem(
            'blogInfo',
            JSON.stringify({ title: blog.title, time: blog.time })
        );
        router.push(`/blogs/${blog.id}`);
    };

    return (
        <div className='w-full bg-gray-200 py-10'>
            <hr className='border-t w-1/2 max-w-lg border-neutral-400 mx-auto' />
            <h2 className='section-title text-center pt-5 pb-8'>
                FEATURED BLOG POSTS
            </h2>
            <div className='grid grid-cols-2 gap-6 max-w-3xl mx-auto px-5 md:grid-cols-4'>
                {blogs.map((blog) => (
                    <article key={blog.id}>
                        <img
                            className='aspect-square object-cover object-center cursor-pointer'
                            src={blog.thumbnail}
                            alt={blog.title}
                            onClick={() => handleBlogDetail(blog)}
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

export default Blog;
