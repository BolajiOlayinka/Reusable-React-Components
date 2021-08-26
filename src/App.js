import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Default from "./Components/Default";
import Index from "./Components/Admin/index";
import Products from "./Components/Admin/Products";
import Customer from "./Components/Admin/Customer";
import Marketing from "./Components/Admin/Marketing";
import Payment from "./Components/Admin/Payment";
import Logistics from "./Components/Admin/Logistics";
// import Administration from "./Components/Admin/Admin";
import Invoice from "./Components/Admin/Invoice";


function App() {
  return (

    <div className="App">
      <React.Fragment>
        <Switch>
        <Route component={Index} path="/dashboard"></Route> 
        <Route component={Customer} path="/customer"></Route> 
        <Route component={Marketing} path="/marketing"></Route> 
        <Route component={Payment} path="/payment"></Route> 
        <Route component={Logistics} path="/logistics"></Route> 
        {/* <Route component={Administration} path="/admin"></Route>  */}
        <Route component={Invoice} path="/invoice"></Route> 
        <Route component={Products} path="/product"></Route> 
        <Route component={Default}></Route> 
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
