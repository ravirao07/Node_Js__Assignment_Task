import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import BlogList from './components/Blog/BlogList';
import BlogDetails from './components/Blog/BlogDetails';
import BlogForm from './components/Blog/BlogForm';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/details/:id" element={<BlogDetails />} />
        <Route path="/create" element={<BlogForm/>} />
        <Route path="/edit/:id" element={<BlogForm />} />
      </Routes>
    </Router>
      
    </div>
  )
}

export default App