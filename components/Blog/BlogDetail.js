import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getDetail } from '../../firebase/fetchData';
import Image from 'next/image';
import Link from 'next/link';
import useStore from '../../appStore/store';

function BlogDetail() {
    const router = useRouter();
    const blogId = router.query.blogDetail;

    const [detail, setDetail] = useState(null);
    const { title, time } = useStore((state) => state.blogInfo);

    useEffect(() => {
        async function fetchData() {
            const result = await getDetail('Blog_detail', blogId);
            result.forEach((doc) => setDetail(doc.data()));
        }
        fetchData();
    }, [router.isReady]);
    return (
        <div className='bg-gray-100 min-h-screen pt-14 pb-8'>
            <div className='max-w-2xl mx-auto'>
                <div className='bg-white'>
                    <div className='p-6 flex-center flex-col-reverse relative font-serif'>
                        <h1 className='text-2xl uppercase underline underline-offset-4 decoration-teal-400 max-w-xs text-center'>
                            {title}
                        </h1>
                        <time className='md:absolute right-6 text-sm italic'>
                            {time}
                        </time>
                    </div>
                    <div className='grid gap-4'>
                        {detail?.images.map((imageSrc) => (
                            <img
                                src={imageSrc}
                                alt=''
                                loading='lazy'
                                key={imageSrc}
                            />
                        ))}
                    </div>
                    <div className='py-12 max-w-md mx-auto px-5'>
                        <Image
                            src='/zigzag-black.png'
                            alt='zig zag'
                            width={35}
                            height={6}
                        />
                        <div className='grid gap-5 mt-5'>
                            {detail?.content.map((paragraph) => (
                                <p
                                    className='text-sm font-serif font-light'
                                    key={paragraph}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-8 bg-white flex-center py-3'>
                    <Link href='/blogs'>
                        <a className='border border-gray-400 text-gray-400 uppercase text-xs font-semibold px-4 py-2'>
                            Back to blog
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
