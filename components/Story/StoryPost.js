import Image from 'next/image';

function StoryPost({ story }) {
    return (
        <article className='overflow-hidden group cursor-pointer'>
            <div className='relative bg-gray-300 aspect-[44/65]'>
                <img
                    src={story.thumbnail}
                    alt={story.title}
                    loading='lazy'
                    className='w-full'
                />
                <div className='story-hover'>
                    <span className='font-medium text-emerald-500 mb-2 text-lg tracking-wider'>
                        READ MORE
                    </span>
                    <Image
                        src='/arrow-green.png'
                        width={84}
                        height={20}
                        alt=''
                    />
                </div>
            </div>
            <div className='px-5 py-3 bg-white h-full md:group-hover:bg-emerald-100'>
                <h4 className='text-xs uppercase text-gray-400 tracking-widest'>
                    {story.author}
                </h4>
                <h2 className='font-serif text-lg underline underline-offset-2 decoration-emerald-300 decoration-2 mt-3 mb-1'>
                    {story.title}
                </h2>
                <p className='text-sm mb-1'>{story.overview}</p>
                <time className='font-serif text-sm italic'>{story.date}</time>
            </div>
        </article>
    );
}

export default StoryPost;
