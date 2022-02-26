
//import main components
import './App.css';
import React from 'react';

//import react router components
import {
  BrowserRouter as Router,
  Routes,                   // Switch = Routes
  Route, 
  Link
} from 'react-router-dom'

//import pages
import HomePage from './pages/homepage/homepage';
import HeaderComponent from './components/header/header.component';


class App extends React.Component {

  //constructor
  constructor(){
    super();

    //initiate state variables
    this.state = {
      navbarClass: "topnav",
    }
  }


  render(){
    return (
      <div>

        <HeaderComponent />

        <Routes>
          
          <Route path='/' element={<HomePage/>}/>

        </Routes>
        

      </div>
    );
  }
}

export default App;
