import Image from 'next/image';
import { useRouter } from 'next/router';

function StoryItem({ story }) {
    const router = useRouter();
    const handleStoryCategory = () => {
        const category = story.category
            .split(' ')
            .map((word) => word[0].toLowerCase() + word.slice(1))
            .join(' ');
        router.push(`/story?category=${category}`);
    };

    return (
        <article className='w-full group overflow-hidden md:max-w-2md cursor-pointer'>
            <div className='w-full max-h-80 relative min-h-[310px] bg-gray-300'>
                <img
                    className='w-full object-cover'
                    src={story.thumbnail_home}
                />
                <div className='card-hover'>
                    <span className='mb-4'>READ STORY</span>
                    <Image
                        src='/arrow-green.png'
                        width={84}
                        height={20}
                        alt='arrow'
                    />
                </div>
            </div>

            <div className='w-full max-h-max p-4 bg-white relative group-hover:bg-cyan-100 h-1/2'>
                <p className='uppercase text-xs font-medium'>
                    <span className='text-gray-500'>{story.author}</span> |{' '}
                    <span onClick={handleStoryCategory}>{story.category}</span>
                </p>
                <h2 className='card-title'>{story.title}</h2>
                <p className='text-sm mt-2'>{story.overview}</p>
                <time className='font-serif italic text-sm text-right font-semibold block'>
                    {story.time}
                </time>
                {story.print && (
                    <div className='py-1 px-3 bg-emerald-500 text-white text-xs inline-block absolute top-0 right-0'>
                        <span className=''>IN PRINT</span>
                    </div>
                )}
            </div>
        </article>
    );
}

export default StoryItem;
