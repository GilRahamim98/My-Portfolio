import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />

    </div>
  );
}

export default App;
