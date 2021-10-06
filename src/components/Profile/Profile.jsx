import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { UserBackground, UserAvatar } from './ProfileImages/ImagesLinks'

const Profile = props => {
    return (

        < div>
            < ProfileInfo
                background={ UserBackground }
                avatar={ UserAvatar }
            />
            <MyPosts
                state={ props.state }
                avatar={ UserAvatar }
                dispatch={ props.dispatch }
            />
        </div>
    )
        ;
}

export default Profile;
