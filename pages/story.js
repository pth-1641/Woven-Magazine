import Navbar from '../components/Navbar';
import Main from '../components/Story';
import Footer from '../components/Footer';
import { useState, useEffect, useRef } from 'react';

function Story() {
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef(null);

    useEffect(() => {
        const dimensions = footerRef.current.getBoundingClientRect();
        setFooterHeight(dimensions.height);
    }, []);

    return (
        <>
            <Navbar />
            <Main footerHeight={footerHeight} />
            <Footer footerRef={footerRef} />
        </>
    );
}

export default Story;
