
//import main components
import React from 'react';
import './custominput.styles.css';

//import react strap components
import { InputGroup, FormControl } from 'react-bootstrap';

const CustomInput = (props) => (
    <div>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">{props.content}</InputGroup.Text>
                <FormControl
                    placeholder={props.placeHolder}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
        </InputGroup>
    </div>
);

export default CustomInput;