
//import main components
import React from 'react';
import './homepage.styles.css';

//import pages and components
import Post from '../../components/post/post.component';
import SharePostPanel from '../../components/sharepostpanel/sharepostpanel.component';

const HomePage = () => (
    <div>
        <SharePostPanel />
        <Post />
        <Post />
    </div>
)

export default HomePage;