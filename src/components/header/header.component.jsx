
//import main components
import React from 'react';
import './header.styles.css';

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
                <a >Nav link</a>

                <a className='float-right' > <FontAwesomeIcon color='white' size="lg" icon={faRightFromBracket} /> </a>
                <a className='float-right' > <FontAwesomeIcon color='white' size="lg" icon={faRightToBracket} /> </a>
                <a className='float-right' > <FontAwesomeIcon color='white' size="lg" icon={faGear} /> </a>
                <a className='float-right' > <FontAwesomeIcon color='white' size="lg" icon={faUser} /> </a>

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