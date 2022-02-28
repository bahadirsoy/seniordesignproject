
//import main components
import React from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

//import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faGear, faHouse, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

class HeaderComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            navbarClass: "topnav",
        }
    }

    render(){
        return(
            <div className={this.state.navbarClass} id="myTopnav">
                <a className="active">FBprogram</a>

                <a >
                    <FontAwesomeIcon color='white' size="lg" icon={faHouse} />
                </a>
                {
                    this.props.currentUser ?
                    <a>welcome</a>
                    :
                    <a>nav link</a>
                }

                <a className='float-right' > <FontAwesomeIcon color='white' size="lg" icon={faGear} /> </a>
                {
                    this.props.currentUser ?
                    <div>
                        <a 
                        className='float-right' 
                        onClick={() => auth.signOut()}
                        >
                            <FontAwesomeIcon color='white' size="lg" icon={faRightToBracket} />
                        </a>
                        <Link to="/profile" className='float-right' > <FontAwesomeIcon color='white' size="lg" icon={faUser} /> </Link>
                    </div>
                    :
                    <div>
                        <Link to="/signin" className='float-right' > SignIn </Link>
                        <Link to="/signup" className='float-right' > SignUp </Link>
                    </div>
                }

                <a className="icon" onClick={() => {
                    //Open links with clicking icon
                    if (this.state.navbarClass === "topnav") {
                    this.setState({navbarClass: "topnav responsive"})
                    } else {
                    this.setState({navbarClass: "topnav"})
                    }
                }}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
        )
    }

}

export default HeaderComponent;