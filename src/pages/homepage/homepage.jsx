
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
            posts: [],
            postIds: []
        }
    }

    async componentDidMount(){
        const q = query(collection(firestore, "posts"), where("displayName", "==", "furkan"));

        const posts = [];
        const postIds = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            
            posts.push(doc.data());
            postIds.push(doc.id)

        });
        
        this.setState({ posts: posts })

    }

    render(){
        return(
            <div>
                <SharePostPanel />
                
                {
                    this.state.posts.map(post => (
                        <Post 
                            key={post.postTitle}
                            postTitle={post.postTitle}
                            postContent={post.postContent}
                            displayName={post.displayName}
                        />
                    ))
                }
            </div>
        )
    }
}

export default HomePage;