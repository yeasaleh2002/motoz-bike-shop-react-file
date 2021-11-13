import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products/Products';
import Blogs from './components/Home/Blogs/Blogs';
import Contact from './components/Home/Contact/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="App">
    
        <Router>

              <Navigation/>

              <Switch>

              <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/home">
                  <Home />
                </Route>

                <Route path="/products">
                  <Products />
                </Route>

                <Route path="/blogs">
                  <Blogs />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>

                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                               
                <Route path="/login">
                  <Login />
                </Route>

                <Route path="/register">
                  <Register />
                </Route>

                <Route path="*">
                  <NotFound></NotFound>
                </Route>
                
              </Switch>
              
              <Footer></Footer>

            </Router>
    </div>
  );
}

export default App;
