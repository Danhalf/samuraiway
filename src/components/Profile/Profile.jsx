import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { UserBackground, UserAvatar } from './ProfileImages/ImagesLinks'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
    return (

        <div>
            < ProfileInfo
                background={ UserBackground }
                avatar={ UserAvatar }
            />
            <MyPostsContainer
                state={ props.state }
                avatar={ UserAvatar }
                dispatch={ props.dispatch }
            />
        </div>
    )
        ;
}

export default Profile;
