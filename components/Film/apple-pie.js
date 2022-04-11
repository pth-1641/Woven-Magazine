function ApplePies() {
    return (
        <div className='bg-gray-100 p-5 md:p-14'>
            <div className='max-w-5xl mx-auto'>
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

export default ApplePies;
