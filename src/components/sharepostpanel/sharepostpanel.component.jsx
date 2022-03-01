
//import main components
import React from 'react';
import './sharepostpanel.styles.css';


class SharePostPanel extends React.Component{
    constructor(){
        super();

        this.state = {

        }
    }


    render(){
        return(
            <div className="panel-content panel-activity">
                <form action="#" className="panel-activity__status">
                    <textarea name="user_activity" placeholder="Share what you've been up to..." className="form-control"></textarea>
                    <div className="actions">
                        <div className="btn-group">
                            <button type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Image">
                                a
                            </button>
                            <button type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Video">
                                b
                            </button>
                            <button type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Idea">
                                c
                            </button>
                            <button type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Question">
                                d
                            </button>
                        </div>
                        <button type="submit" className="btn btn-sm btn-rounded btn-info">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        )
    }

}

export default SharePostPanel;