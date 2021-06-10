import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Services from './components/Services';
import Products from './components/Products';
import Quote from './components/Quote';
import Approach from './components/Approach';
import People from './components/People';
import Career from './components/Career';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <NavBar />
      <Element name='home'>
        <Banner />
      </Element>
      <Element name='services'>
        <Services />
      </Element>
      <Element name='products'>
        <Products />
      </Element>
      <Element name='quote'>
        <Quote />
      </Element>
      <Element name='approach'>
        <Approach />
      </Element>
      <Element name='people'>
        <People />
      </Element>
      <Element name='careers'>
        <Career />
      </Element>
      <Element name='blog'>
        <Blog />
      </Element>
      <Element name='contact'>
        <Footer />
      </Element>
    </>
  );
}

export default App;
