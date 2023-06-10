import './App.css';
import NewItem from './component/NewItem';
import NewsLetter from './component/NewsLetter';
import Testimonial from './component/Testimonial';
import Feature from './component/Feature';
import FeatureTwo from './component/FeatureTwo';
import Hero from './component/Hero';
import Footer from './component/Footer';
import Header from './component/Header';
import Layout from './component/Layout';

const App = () => {

  return (
    <div className="App">
      {/* <Layout /> */}
      <Hero />
      <Feature />
      <NewItem />
      <FeatureTwo />
      <Testimonial />
      <NewsLetter />
      <Footer/>
    </div>
  );
};

export default App;
