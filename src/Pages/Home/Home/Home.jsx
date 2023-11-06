
import Blog from '../Blog/Blog';
import NewsLetter from '../NewsLetter/NewsLetter';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blog></Blog>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;