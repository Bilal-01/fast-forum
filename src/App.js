import React, { useState, useContext, createContext } from 'react';
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
  Project,
  Event,
  TimetablePage, 
  Authentication,
  Admin,
} from './pages';
import UserContext from './components/UserContext';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const data = {
    user,
    isLoading,
    isLoggedIn,
    setUser,
    setIsLoading,
    setIsLoggedIn
  }

  return (
    <UserContext.Provider value={data}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/societies' element={<Societies />} />
          <Route path='/Event' element={<Event />} />          
          <Route path='/profile' element={<Profile />} />
          <Route path='/blog/forms' element={<Forms />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/carpool' element={<Carpool />} />      
          <Route path='/project' element={<Project />} />      
          <Route path='/timetable' element={<TimetablePage />} />         
          <Route path='/authentication' element={<Authentication />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

