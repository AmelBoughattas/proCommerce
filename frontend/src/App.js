import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen1 from "./screens/ProductScreen1";
import CartScreen from "./screens/CartScreen";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";


import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from './screens/ProfileScreen';
import ProfileAdminScreen from "./screens/ProfileAdminScreen";
import PrivateAdminRouter from './privateRoutes/PrivateAdminRouter';
import PrivateRoute from './privateRoutes/PrivateRoute';
import AllProductScreen from './screens/AllProductScreen';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
 

  const [sideToggle, setSideToggle] = useState(false);

  return (
    
     <Router>
     
       <Navbar  click={() => setSideToggle(true)}  /> 
      <SideDrawer   show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop  show={sideToggle} click={() => setSideToggle(false)}  /> 
       
      <main>     
        <Switch>
 
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product" component={AllProductScreen} /> 
          <Route exact path="/product/:id" component={ProductScreen1} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/login"  component={LoginScreen} />
          <Route  exact path="/contact"  component={Contact}/> 
          <PrivateRoute exact path="/profile"  component={ProfileScreen} ></PrivateRoute>
          <PrivateAdminRouter exact path="/profileAdmin"  component={ProfileAdminScreen} ></PrivateAdminRouter> 

        </Switch>
      </main>
      <Footer/>
    </Router>
    
  );
}

export default App;
