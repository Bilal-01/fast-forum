import React from 'react';
import { 
  Home, 
  About, 
  Contact, 
  Blog, 
  Forms, 
  Societies, 
  Details, 
  Profile,
  Carpool,
  Teachers,
  Resources,
  Guide,
  Project,
  TimetablePage,
  Authentication, 
} from './pages';
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
          <Route path='/blog/forms' element={<Forms />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/carpool' element={<Carpool />} />      
          <Route path='/project' element={<Project />} />      
          <Route path='/timetable' element={<TimetablePage />} />     
          <Route path='/Authentication' element={<Authentication />} />               
        </Routes>
      </Router>
    </>
  );
}

export default App;

