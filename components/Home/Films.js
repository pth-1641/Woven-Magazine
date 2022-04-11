function Films() {
    return (
        <div className='w-full bg-zinc-300 pt-6 pb-4'>
            <h2 className='section-title pb-4 text-center'>SELECTED FILMS</h2>
            <div className='grid grid-cols-1 gap-4 max-w-7xl mx-auto md:grid-cols-2'>
                <iframe
                    className='w-full aspect-video'
                    src='https://player.vimeo.com/video/159979936?title=0&byline=0&portrait=0'
                    allowFullScreen
                    frameBorder={0}
                    loading='lazy'
                />
                <iframe
                    className='w-full aspect-video'
                    src='https://player.vimeo.com/video/110611030?title=0&byline=0&portrait=0'
                    allowFullScreen
                    frameBorder={0}
                    loading='lazy'
                />
            </div>
        </div>
    );
}

export default Films;
