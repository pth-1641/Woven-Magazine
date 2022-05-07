import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

function Interview() {
    const [display, setDisplay] = useState(false);
    const [typeOfRequest, setTypeOfRequest] = useState(
        'TYPE OF INTERVIEW REQUESTED'
    );

    const toggleDisplay = (e) => {
        setDisplay(!display);
        if (e.target.localName !== 'div') {
            setTypeOfRequest(e.target.textContent);
        }
    };

    return (
        <div className='w-full px-5 py-20 bg-gray-100'>
            <h1 className='footer-title'>
                TELL US YOUR <span className='block'>THOUGHTS</span>
            </h1>
            <div className='grid grid-cols-1 gap-x-16 max-w-xl mx-auto lg:grid-cols-2 lg:max-w-5xl'>
                <div>
                    <h3 className='info-title'>REQUEST AN INTERVIEW</h3>
                    <p className='info-detail'>
                        Woven wants to share good stories. Period. Specifically
                        stories about makers, thinkers, and artists attempting
                        to make a difference. The point is not your success;
                        it’s your journey, where you are going. If you have a
                        story that you’d like to share, please get in touch with
                        us.
                    </p>
                    <hr className='border-gray-400 my-7' />
                    <h3 className='info-title'>FEATURE ARTICLES</h3>
                    <p className='info-detail'>
                        These stories are longer in format and cover more of the
                        individual’s personal journey. The interview period is
                        longer in nature and the questions are more involved.
                        They often feature the individual’s home, their craft,
                        and the creative environment. Place, purpose, and
                        journey are quintessential to document these interviews.
                    </p>
                    <hr className='border-gray-400 my-7' />
                    <h3 className='info-title'>WOVEN MORNINGS</h3>
                    <p className='info-detail'>
                        These stories illustrate how people use food and
                        dwelling to create visual and savory extensions of their
                        personality. This interview exists for the cooks and the
                        interior enthusiasts; for those who swoon over baked
                        goods and seek matchless additions to their homes. Share
                        your home, a palatable meal, or both with Woven
                        Mornings.
                    </p>
                </div>
                <form className='h-max px-6 py-8 bg-white mt-5 lg:mt-0'>
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
                    <div className='w-full text-xs font-semibold uppercase'>
                        <div
                            className='flex-between form-input relative cursor-pointer'
                            onClick={(e) => toggleDisplay(e)}
                        >
                            {typeOfRequest}
                            <span className='text-lg'>
                                <BsPlus />
                            </span>
                            {display && (
                                <ul className='absolute top-6 px-2 py-1 bg-emerald-200 w-full leading-5'>
                                    <li>DESIGN</li>
                                    <li>LIFESTYLE</li>
                                    <li>CRAFT</li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <textarea
                        placeholder='tell us a little about yourself, and what you do'
                        className='form-input bg-slate-200 px-1 py-2 border-b-0 resize-none'
                        rows={8}
                        cols={40}
                    ></textarea>
                    <button type='submit' className='btn ml-auto'>
                        REQUEST INTERVIEW
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Interview;
