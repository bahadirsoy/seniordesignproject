
//import main components
import './App.css';
import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
import ProfilePage from './pages/profilepage/profilepage';
import SignInPage from './pages/signinpage/signinpage';


class App extends React.Component {

  //constructor
  constructor(){
    super();

    //initiate state variables
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
    
  componentDidMount(){
      //assign current user everytime component did mount
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
          createUserProfileDocument(user);
      });
  }

  //unsubscribe from auth when app is closed
  componentWillUnmount(){
      this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>

        <HeaderComponent
          currentUser={this.state.currentUser}
        />

        <Routes>
          
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/signin' element={<SignInPage/>}/>

        </Routes>
        

      </div>
    );
  }
}

export default App;
