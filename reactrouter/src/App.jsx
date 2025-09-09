// App.jsx
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import OldBooks from "./components/OldBooks";
import NewBooks from "./components/NewBooks";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


function App() {

   return (
    <div>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to="/contact">Contact</Link> </li>
        <li><Link to="/user/4">user</Link></li>
        <li><Link to="/books/old_books">oldbooks</Link></li>
        <li><Link to="/books/new_books">newbooks</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route>
          <Route path="/books">
            <Route path="old_books" element={<OldBooks />} />
            <Route path="new_books" element={<NewBooks />} />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
