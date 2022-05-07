function Collaborate() {
    return (
        <div className='w-full px-5 py-20 bg-gray-100'>
            <h1 className='footer-title'>
                SHARE YOUR<span className='block'>PASSIONS</span>
            </h1>
            <div className='grid grid-cols-1 gap-x-16 max-w-xl mx-auto lg:grid-cols-2 lg:max-w-5xl'>
                <div>
                    <h3 className='info-title'>HEY CREATIVES</h3>
                    <p className='info-detail'>
                        Here at Woven we understand and gladly acknowledge that
                        we can’t do everything ourselves. We welcome the
                        opportunity to work with fellow creatives,
                        photographers, and film makers. As a result, many of the
                        articles and videos here rely heavily on the skills of
                        fellow collaborators. If you have an interest in working
                        together or a skill you’d like to offer, please reach
                        out to us.
                    </p>
                    <hr className='border-gray-400 my-7' />
                    <h3 className='info-title'>GET FAMILIAR</h3>
                    <p className='info-detail'>
                        Take some time to familiarize yourself with the
                        editorial tone and visual aesthetic of Woven to see if
                        it relates with your own. We would relish the
                        opportunity to establish a relationship with you, look
                        at your work, and perhaps collaborate on an article or
                        creative experiment of sorts.
                    </p>
                </div>
                <form className='px-6 py-8 bg-white mt-5 lg:mt-0'>
                    <h3 className='font-serif text-lg mb-2'>
                        Tell us a little about yourself:
                    </h3>
                    <input
                        type='text'
                        placeholder='first + last name'
                        className='form-input'
                        required
                    />
                    <input
                        type='text'
                        placeholder='location (city + state/country)'
                        className='form-input'
                        required
                    />
                    <input
                        type='text'
                        placeholder='website (optional)'
                        className='form-input'
                    />
                    <input
                        type='email'
                        placeholder='your email'
                        className='form-input'
                        required
                    />
                    <textarea
                        placeholder='tell us a little about yourself, and what you do'
                        className='form-input bg-slate-200 px-1 py-2 border-b-0 resize-none'
                        rows={8}
                        cols={40}
                    ></textarea>
                    <button type='submit' className='btn ml-auto'>
                        REQUEST REVIEW
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Collaborate;
