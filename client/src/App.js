import React, { createContext, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from "./components/Navbar"
import Signup from './components/Signup';
import Dropdown from './components/Categories/Dropdown'
import Logout from './components/Logout'
import { initialState, reducer } from '../src/reducer/UseReducer'
import Home1 from './components/Home1';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team from './components/Team';
import Footer from './components/Footer'
import './App.css';




// contextApi
export const UserContext = createContext();

const Routing = () => {
   AOS.init();
   return (
      <>
         <Switch>
         
            <Route exact path="/">
               <Home1 />
            </Route>
            <Route exact path="/categories">
               <Dropdown/>
            </Route>

            <Route path="/about">
               <About />
            </Route>

            <Route path="/contact">
               <Contact />
            </Route>

            <Route path="/login">
               <Login />
            </Route>

            <Route path="/signup">
               <Signup />
            </Route>
            
         

            <Route path="/team">
               <Team />
            </Route>
            

            <Route path="/logout">
               <Logout />
            </Route>
         </Switch>
      </>
   )
}

const App = () => {
   const [state, dispatch] = useReducer(reducer, initialState)

   return (

      <>
         <UserContext.Provider value={{ state, dispatch }}>
            <Navbar />
            <Routing />
            <Footer/>
         </UserContext.Provider>
         

         {/* <Footer/> */}


      </>
   )
}

export default App