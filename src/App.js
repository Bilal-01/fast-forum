import React from 'react';
import { Home, About, Contact, Blog, Societies, Details, Profile } from './pages';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/societies' element={<Societies />} />
          <Route path='/societies/details' element={<Details />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

