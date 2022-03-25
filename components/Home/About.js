import React from 'react';

function About() {
    return (
        <div className='w-full py-16'>
            <div className='flex-center gap-x-10 items-start h-full max-w-5xl mx-auto px-8 flex-col md:justify-around md:flex-row md:items-center'>
                <h3 className='font-semibold text-4xl font-serif'>
                    design <em className='font-thin'>and</em> travel
                </h3>
                <div>
                    <h6 className='section-title mb-1 mt-4'>ABOUT US</h6>
                    <p className='md:max-w-2md'>
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
