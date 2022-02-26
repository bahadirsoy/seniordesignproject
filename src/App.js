
import './App.css';
import React from 'react';

//import bootstrap components
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

//import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faBars } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      navbarClass: "topnav",
    }
  }


  render(){
    return (
      <div>
        <div className={this.state.navbarClass} id="myTopnav">
          <div>
            <a className="active">FBprogram</a>
            <a >News</a>
            <a >Contact</a>
            <a >About</a>
            <a className="icon" onClick={() => {
              if (this.state.navbarClass === "topnav") {
                this.setState({navbarClass: "topnav responsive"})
              } else {
                this.setState({navbarClass: "topnav"})
              }
            }}>
              <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>
            </a>
          </div>
        </div>
  
        <div>
          <h2>Responsive Topnav Example</h2>
          <p>Resize the browser window to see how it works.</p>
        </div>
      </div>
    );
  }
}

export default App;
