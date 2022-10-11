import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Societies from './pages/Societies/Societies';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/Societies' element={<Societies />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

