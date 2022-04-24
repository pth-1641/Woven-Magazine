import Link from 'next/link';
import PostCategories from '../PostCategories';

function Film() {
    return (
        <div className='bg-gray-100 p-5 md:p-10'>
            <div className='max-w-5xl mx-auto'>
                <iframe
                    className='w-full aspect-video'
                    src='https://player.vimeo.com/video/159979936?title=0&byline=0&portrait=0'
                    allowFullScreen
                    frameBorder={0}
                    loading='lazy'
                />
                <PostCategories title='the films' firstLink='blogs' />
                <Link href='/films/apple-pies'>
                    <a className='grid grid-cols-2'>
                        <div className='w-full bg-white p-5 hover:bg-cyan-100'>
                            <h2 className='card-title'>
                                Salted Caramel Apple Hand Pies
                            </h2>
                            <p className='text-sm mt-2'>
                                Excerpts are optional hand-crafted summaries of
                                your content that can be used in your theme.
                            </p>
                            <time className='font-serif italic text-sm text-right font-semibold block'>
                                .10.29.14.
                            </time>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Film;
