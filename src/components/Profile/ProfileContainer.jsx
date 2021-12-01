import { addPost, updatePostMessage, setUserProfile } from "../../redux/Reducers/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import { Component } from "react";
import axios from "axios";


class ProfileContainer extends Component {


    componentDidMount() {
        const URL = `https://social-network.samuraijs.com/api/1.0/profile/2`
        axios.get(URL)
            .then(response => {
                this.props.setUserProfile(response.data)
            })

    }


    render() {
        return (
            <div>
                <Profile { ...this.props }/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    inputMessage: state.profilePage.inputMessage,
    userAvatar: state.profilePage.userAvatar,
    userBackgroundImage: state.profilePage.userBackgroundImage,
    buttonDisabled: state.profilePage.buttonDisabled()
});


export default connect(
    mapStateToProps,
    { updatePostMessage, addPost, setUserProfile })
(ProfileContainer)