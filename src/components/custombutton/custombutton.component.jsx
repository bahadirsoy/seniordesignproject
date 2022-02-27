

//import main components
import React from 'react';
import './custombutton.styles.css';

//import react strap components
import { Button } from 'bootstrap';


const CustomButton = (props) => {
    <Button
        variant={props.vairant}
        value={props.value}
        size={props.size}
    ></Button>
}