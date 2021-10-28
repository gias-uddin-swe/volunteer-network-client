import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddEvents from "./components/AddEvents/AddEvents";
import AddVolunteer from "./components/AddVolunteer/AddVolunteer";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/addEvents">
            <AddEvents></AddEvents>
          </Route>
          <Route exact path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
          </Route>
          <Route exact path="/registerVolunteer">
            <AddVolunteer></AddVolunteer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
