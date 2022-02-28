
//import main components
import React from 'react';
import './signuppage.styles.css';
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';

//import react strap components
import { FormLabel } from 'react-bootstrap';

//import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG, faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';

//import local components
import CustomInput from '../../components/custominput/custominput.component';


class SignUpPage extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        };
    }

    //handle submit
    handleSubmit = async e => {
        //when user sign ins reset inputs
        e.preventDefault();

        //destructure state variables
        const { displayName, email, password, confirmpassword } = this.state;
        
        if(password !== confirmpassword){
            alert("Password and confirm password are not same");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            })
        } catch(error){

        }

    }

    //handle change in inputs
    handleChange = e => {
        //update state variables everytime user types
        const {value} = e.target;
        const {name} = e.target;
        
        this.setState({ [name]: value })
    }

    render(){
        return (
            <div>
                <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-outline">
                                <CustomInput
                                    className="form-control form-control-lg"
                                    id="displayName"
                                    content="Display name"
                                    placeHolder="Display name"
                                    name='displayName'
                                    type='text'
                                    value={this.state.displayName}
                                    handleChange={this.handleChange}
                                    required
                                ></CustomInput>
                                <FormLabel className="form-label" htmlFor="displayName"></FormLabel>
                            </div>

                            <div className="form-outline">
                                <CustomInput
                                    className="form-control form-control-lg"
                                    id="email"
                                    content="Email"
                                    placeHolder="email"
                                    name='email'
                                    type='email'
                                    value={this.state.email}
                                    handleChange={this.handleChange}
                                    required
                                ></CustomInput>
                                <FormLabel className="form-label" htmlFor="email"></FormLabel>
                            </div>
                            
                            <div className="form-outline">
                                <CustomInput
                                    className="form-control form-control-lg"
                                    id="password"
                                    content="Password"
                                    placeHolder="password"
                                    name='password'
                                    type='password'
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                ></CustomInput>
                                <FormLabel className="form-label" htmlFor="password"></FormLabel>
                            </div>

                            <div className="form-outline">
                                <CustomInput
                                    className="form-control form-control-lg"
                                    id="confirmpassword"
                                    content="Confirm Password"
                                    placeHolder="password again"
                                    name='confirmpassword'
                                    type='password'
                                    value={this.state.confirmpassword}
                                    handleChange={this.handleChange}
                                ></CustomInput>
                                <FormLabel className="form-label" htmlFor="confirmpassword"></FormLabel>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign up</button>

                        </form>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default SignUpPage;