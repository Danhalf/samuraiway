import { addPost, updatePostMessage, setUserProfile } from "../../redux/Reducers/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


class ProfileContainer extends Component {


    componentDidMount() {
        const userId = this.props.match.params.userId ?? 2;
        const URL = `https://social-network.samuraijs.com/api/1.0/profile/${ userId }`
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

const withUrlDataProfileContainer = withRouter(ProfileContainer)


export default connect(
    mapStateToProps,
    { updatePostMessage, addPost, setUserProfile })
(withUrlDataProfileContainer)