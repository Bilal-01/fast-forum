import React, { useState, useContext, createContext, useEffect } from 'react';
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
  Library,
  Teachers,
  Resources,
  Project,
  TimetablePage, 
  Authentication,
  Admin,
  Canteens,
  Menu
} from './pages';

import UserContext from './components/UserContext';
import {BrowserRouter as Router, Switch, Route, Routes, Navigate, useNavigate, json} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { UserProfile, RequireAuth } from './components';

function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const data = {
    user,
    isLoading,
    isLoggedIn,
    setUser,
    setIsLoading,
    setIsLoggedIn
  }

  useEffect(() => {
    setIsLoading(true);
    setUser(JSON.parse(sessionStorage.getItem("user")));
    setIsLoading(false);
  }, [])

  return (
    <UserContext.Provider value={data}>
      <Router>
        <Routes>
          <Route path='/societies' element = {
            <RequireAuth>
              <Societies />
            </RequireAuth>
          } />
          <Route path='/profile/:id' element = {
            <RequireAuth>
              <Profile /> 
            </RequireAuth>
          }></Route>
          <Route path="/teachers" element = {
            <RequireAuth>
              <Teachers />
            </RequireAuth>
          } />
          <Route path='/resources' element = {
              <Resources/>
          } />
          <Route path='/library' element = {
              <Library/>
          } />
          <Route path="/carpool" element = {
            
              <Carpool />    
            
          } />
          <Route path="/project" element = {
            <RequireAuth>    
              <Project />
            </RequireAuth>
          } />
          <Route path="/timetable" element = {
            <RequireAuth>   
              <TimetablePage />  
            </RequireAuth>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
            
          <Route path='/blog/forms' element={<Forms />} />
                  
          <Route path='/authentication' element={<Authentication />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/Canteens' element={<Canteens />} />
          <Route path='/Canteens/:params' element={<Menu />} />
          
          <Route path='/*' element={<Home />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

