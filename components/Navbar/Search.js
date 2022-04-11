import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useEffect } from 'react';

function Search({ setDisplaySearch, setDisplayShop }) {
    useEffect(() => {
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const handleEscape = (e) => {
        if (e.keyCode === 27) {
            setDisplaySearch(false);
            setDisplayShop(true);
        }
    };

    return (
        <div
            className='fixed inset-0 bg-white-0.9 z-30 flex-center'
            onKeyPress={(e) => handleEscape(e)}
        >
            <div className='w-full px-10 md:w-auto'>
                <form className='flex-center'>
                    <input
                        type='text'
                        placeholder='Search Woven + Hit Enter'
                        className='font-serif text-2xl outline-none bg-transparent min-w-full md:text-5xl'
                    />
                    <button className='flex-center border-2 border-emerald-500 p-1 text-xl text-emerald-500 md:p-2'>
                        <MdOutlineArrowForwardIos />
                    </button>
                </form>
                <p className='text-sm font-semibold tracking-wider mt-2 ml-4 hidden md:block'>
                    PRESS <kbd className='text-emerald-500'>(ESC)</kbd> TO CLOSE
                </p>
            </div>
        </div>
    );
}

export default Search;
