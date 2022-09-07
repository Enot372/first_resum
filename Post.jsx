import React from 'react';
import s from './Post.mosule.css'
import person from '../../../../img/person.png'


const Post = (props) => {

    return (
        <div className={s.item}>
            <img src={person} alt =""></img>
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;