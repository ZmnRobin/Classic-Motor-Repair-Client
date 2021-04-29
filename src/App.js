import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './Components/Admin/ManageProducts/ManageProducts';
import Login from './Components/Home/Login/Login';
import Book from './Components/User/Book/Book';
import Review from './Components/User/Review/Review';
import NotFound from './Components/User/NotFound/NotFound';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Home/Login/PrivateRoute';
import OrderList from './Components/Admin/OrderList/OrderList';

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <PrivateRoute path='/admin'>
          <Admin/>
        </PrivateRoute>
        <PrivateRoute path='/addService'>
          <AddService/>
        </PrivateRoute>
        <PrivateRoute path='/makeAdmin'>
          <MakeAdmin/>
        </PrivateRoute>
        <PrivateRoute path='/manageService'>
          <ManageProducts/>
        </PrivateRoute>
        <Route path='/login'>
          <Login/>
        </Route>
        <PrivateRoute path='/book/:id'>
          <Book/>
        </PrivateRoute>
        <Route path='/orderList'>
          <OrderList/>
        </Route>
        <PrivateRoute path='/review'>
          <Review/>
        </PrivateRoute>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
