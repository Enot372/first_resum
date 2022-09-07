import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Person from '../../img/person.png';


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={Person} alt =""></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;