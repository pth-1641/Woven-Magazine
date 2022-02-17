import React from 'react';

function About() {
    return (
        <div className='w-full h-44'>
            <div className='flex-center h-full max-w-5xl justify-around mx-auto'>
                <h3 className='font-semibold text-4xl font-serif'>
                    design <span className='font-thin italic'>and</span> travel
                </h3>
                <div>
                    <h6 className='text-sm mb-1 font-semibold'>ABOUT US</h6>
                    <p className='max-w-2md'>
                        Woven Magazine celebrates artists, designers, and
                        entrepreneurs while exploring the history of design
                        through travel.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
