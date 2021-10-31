import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './compunent/About/About';
import AddTour from './compunent/AddTour/AddTour';
import Tours from './compunent/AllToursArea/Tours';
import Contact from './compunent/Contact/Contact';
import Error from './compunent/Error/Error';
import Footer from './compunent/Footer/Footer';
import Header from './compunent/Header/Header';
import Home from './compunent/Home/Home';
import Login from './compunent/Login/Login';
import PrivateRoute from './compunent/PrivateRoute/PrivateRoute';
import TourDeatails from './compunent/TourDeatails/TourDeatails';
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/TourArea">
          <Tours></Tours>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/addTour">
          <AddTour></AddTour>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <PrivateRoute exact path="/details/:tourId">
          <TourDeatails></TourDeatails>
        </PrivateRoute>
        
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
