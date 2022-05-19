import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from './Header';
import Login from './Login';
import { auth } from "./firebase";
import {onAuthStateChanged} from 'firebase/auth'
import Checkout from './Checkout';

function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        // the user just logged in / the user was logged in
        // dispatch({
        //   type: "SET_USER",
        //   user: authUser,
        // });
      } else {
        // the user is logged out
        // dispatch({
        //   type: "SET_USER",
        //   user: null,
        // });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
