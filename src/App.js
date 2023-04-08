import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<About />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
