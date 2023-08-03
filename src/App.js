import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App-wrap">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;