import React from 'react';
import s from './MyPosts.mosule.css'
import Post from './Post/Post';
import Persona from '../../../img/logo.png'


const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' logo={Persona}/>
                <Post message="It's my first post" logo={Persona}/>
            </div>
        </div>
    )

}

export default MyPosts;