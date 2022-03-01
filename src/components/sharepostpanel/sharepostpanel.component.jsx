
//import main components
import React from 'react';
import './sharepostpanel.styles.css';

//import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

//import react strap components
import { Container, Row } from 'react-bootstrap';


class SharePostPanel extends React.Component{
    constructor(){
        super();

        this.state = {

        }
    }


    render(){
        return(
            <Container>
                <Row>
                    <div className="panel-content panel-activity">
                        <form action="#" className="panel-activity__status">
                            <textarea name="user_activity" placeholder="Share what you've been up to..." className="form-control"></textarea>
                            <div className="actions">
                                <div className="btn-group">
                                    <a type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Image">
                                        <FontAwesomeIcon color='white' size="lg" icon={faImage} />
                                    </a>
                                    <a type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Video">
                                        <FontAwesomeIcon color='white' size="lg" icon={faImage} />
                                    </a>
                                    <a type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Idea">
                                        <FontAwesomeIcon color='white' size="lg" icon={faImage} />
                                    </a>
                                    <a type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Question">
                                        <FontAwesomeIcon color='white' size="lg" icon={faImage} />
                                    </a>
                                </div>
                                <button type="submit" className="btn btn-sm btn-rounded btn-info">
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        )
    }

}

export default SharePostPanel;