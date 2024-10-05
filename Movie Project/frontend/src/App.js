import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  return (
    <Router>
      <div>
        <Route path="/movies" component={MovieList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/add-movie" component={MovieForm} />
        <ProtectedRoute path="/edit-movie/:id" component={MovieForm} />
      </div>
    </Router>
  );
};

export default App;
