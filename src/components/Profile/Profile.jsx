import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from "./MyPosts/MyPosts";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Profile = props => {

    return props.profile ? (

        <div>
            < ProfileInfo
                background={ props.userBackgroundImage }
                profile={ props.profile }
                avatar={ props.userAvatar }
            />
            <MyPosts
                posts={ props.posts }
                inputMessage={ props.inputMessage }
                buttonDisabled={ props.buttonDisabled }
                updatePostMessage={ props.updatePostMessage }
                addPost={ props.addPost }
                userAvatar={ props.userAvatar }
            />
        </div>
    ) : (
        <Box sx={ { width: '100%' } }>
            <LinearProgress color="success" sx={ { height: '12px' } }/>
        </Box>
    )
        ;
}

export default Profile;
