
import './App.css';
import Home from './component/Home'
import Contact from './component/Contact'
import Navbar from './component/navbar'
import Login from './component/Login';
import Registration from './component/Registration'
import Event from './component/event'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Route,Switch} from "react-router-dom";
function App() {
  return (
    <Switch>
      
                <Route path="/" component={Home} exact />
                <Route path="/Navbar" component={Navbar} />
                <Route path="/Registration" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/contact" component={Contact} />
                <Route path="/event" component={Event} />
       </Switch>
    // <Home />
  );
}

export default App;
