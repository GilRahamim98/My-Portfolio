import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />

    </div>
  );
}

export default App;
