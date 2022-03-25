import Navbar from '../components/Navbar';
import Slider from '../components/Home/Silder';
import About from '../components/Home/About';
import StoryList from '../components/Home/StoryList';
import Films from '../components/Home/Films';
import Blog from '../components/Home/Blog';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            <About />
            <StoryList />
            <Films />
            <Blog />
            <Footer />
        </>
    );
}

export default Home;
