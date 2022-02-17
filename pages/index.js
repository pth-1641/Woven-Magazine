import Navbar from '../components//Home/Navbar';
import Slider from '../components/Home/Silder';
import About from '../components/Home/About';
import StoryList from '../components/Home/StoryList';
import Films from '../components/Home/Films';

function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            <About />
            <StoryList />
            <Films />
        </>
    );
}

export default Home;
