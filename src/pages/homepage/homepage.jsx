
//import main components
import React from 'react';
import './homepage.styles.css';
import { firestore } from '../../firebase/firebase.utils';
import { collection, query, where, getDocs } from "firebase/firestore";

//import pages and components
import Post from '../../components/post/post.component';
import SharePostPanel from '../../components/sharepostpanel/sharepostpanel.component';

class HomePage extends React.Component{

    constructor(){
        super();

        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const q = query(collection(firestore, "posts"), where("displayName", "==", "furkan"));

        const posts = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            posts.push(doc.data());

        });
        
        this.setState({ posts: posts }, () => console.log(this.state.posts))

    }

    render(){
        return(
            <div>
                <SharePostPanel />
                <Post />
                <Post />
            </div>
        )
    }
}

export default HomePage;