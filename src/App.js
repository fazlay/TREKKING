
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './component/Footer/Footer';
import MyOrders from './Page/MyOrders/MyOrders';
import ManageOrders from './Page/ManageOrders/ManageOrders';
import Login from './Page/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivetRoute/PrivetRoute';
import ConfirmBooking from './Page/ConfirmBooking/ConfirmBooking';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manageorders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/confirmbooking/:id'>
              <ConfirmBooking></ConfirmBooking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
