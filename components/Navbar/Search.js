import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useEffect } from 'react';

function Search({ setDisplaySearch }) {
    useEffect(() => {
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const handleEscape = (e) => {
        if (e.keyCode === 27) {
            setDisplaySearch(false);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-white-0.9 z-30 flex-center"
            onKeyPress={(e) => handleEscape(e)}
        >
            <div>
                <form className="flex-center">
                    <input
                        type="text"
                        placeholder="Search Woven + Hit Enter"
                        className="font-serif text-5xl outline-none bg-transparent"
                    />
                    <button className="flex-center border-2 border-emerald-500 p-2 text-xl text-emerald-500 ml-4">
                        <MdOutlineArrowForwardIos />
                    </button>
                </form>
                <p className="text-sm font-semibold tracking-wider mt-4 ml-10">
                    PRESS <kbd className="text-emerald-500">(ESC)</kbd> TO CLOSE
                </p>
            </div>
        </div>
    );
}

export default Search;
