import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Login from './components/Shared/Login/Login';
import AuthProvider from './Context/AuthProvider';
import SignUp from './components/Shared/SignUp/SignUp';
import DoctorsDetail from './components/DoctorsDetail.js/DoctorsDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import BookAppointment from './components/BookAppointment/BookAppointment';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

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
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute exact path="/doctordetail/:doctorId">
            <DoctorsDetail></DoctorsDetail>
          </PrivateRoute>
          <PrivateRoute exact path="/bookappointment">
            <BookAppointment></BookAppointment>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
