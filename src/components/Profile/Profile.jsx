import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { UserBackground, UserAvatar } from './ProfileImages/ImagesLinks'

const Profile = props => (
    <div>
        <ProfileInfo background={ UserBackground } avatar={ UserAvatar }/>
        <MyPosts
            state={ props.state }
            avatar={ UserAvatar }
            addPost={ props.addPost }
            updatePostMessage={ props.updatePostMessage }
        />
    </div>
);

export default Profile;
