import { MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/router';

function BlogPost({ blog }) {
    const router = useRouter();

    const handleBlogDetail = () => {
        router.push(`/blogs/${blog.id}`);
    };

    return (
        <div className='w-full bg-white flex flex-col-reverse md:grid md:grid-cols-12'>
            <div className='col-span-5 p-6 flex-center flex-col gap-5 items-start relative'>
                <h5 className='absolute font-serif text-sm top-3 right-3'>
                    {blog.time}
                </h5>
                <h2
                    className='underline font-serif text-xl decoration-emerald-400 underline-offset-4 uppercase mt-6 md:text-2xl cursor-pointer'
                    onClick={handleBlogDetail}
                >
                    {blog.title}
                </h2>
                <p className='text-sm'>{blog.overview}</p>
                <a
                    className='flex-center text-emerald-500 font-semibold text-sm cursor-pointer'
                    onClick={handleBlogDetail}
                >
                    DO GO ON
                    <span className='text-lg'>
                        <MdKeyboardArrowRight />
                    </span>
                </a>
            </div>
            <img
                src={blog.thumbnail}
                alt={blog.title}
                onClick={handleBlogDetail}
                className='w-full max-h-[300px] object-center object-cover md:max-h-max md:col-span-7 cursor-pointer'
            />
        </div>
    );
}

export default BlogPost;
