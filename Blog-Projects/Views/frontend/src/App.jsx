import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './Components/BlogList';
import BlogDetails from './Components/BlogDetails';
import BlogForm from './Components/BlogForm';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/details/:id" element={<BlogDetails />} />
        <Route path="/create" element={<BlogForm/>} />
        <Route path="/edit/:id" element={<BlogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
