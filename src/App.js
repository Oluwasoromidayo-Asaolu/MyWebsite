import './App.css';
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/contact';
import Projects from './Components/Projects/project';
import About from './Components/About/about';
import Hero from './Components/Hero/hero';


function App() {
  return (
    <div>
      {/* <Header />
      */}
      <Hero />
      <div className='body-div'>
        <About />
        <hr className='app-hr' />
        <Projects />
        <hr className='app-hr' />
        <Contact /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
