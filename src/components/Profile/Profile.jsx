import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {

    return (
        <div>
            < ProfileInfo
                background={ props.userBackgroundImage }
                avatar={ props.userAvatar }
            />
            <MyPosts
                posts={ props.posts }
                inputMessage={ props.inputMessage }
                buttonDisabled={ props.buttonDisabled }
                changeText={ props.changeText }
                addPost={ props.addPost }
                userAvatar={ props.userAvatar }
            />
        </div>
    )
        ;
}

export default Profile;
