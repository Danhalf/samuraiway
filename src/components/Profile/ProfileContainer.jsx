import { updatePostMessageAction, addPostAction } from "../../redux/Reducers/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";


const mapStateToProps = state => ({
    posts: state.profilePage.posts,
    inputMessage: state.profilePage.inputMessage,
    userAvatar: state.profilePage.userAvatar,
    userBackgroundImage: state.profilePage.userBackgroundImage,
    buttonDisabled: state.profilePage.buttonDisabled()
});


const mapDispatchToProps = (dispatch) => ({
    changeText: (text) => {
        dispatch(updatePostMessageAction(text))
    },
    addPost: () => {
        dispatch(addPostAction())
    }
});
const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Profile)

export default ProfileContainer;