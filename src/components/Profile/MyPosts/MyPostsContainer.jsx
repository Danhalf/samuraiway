import { updatePostMessageAction, addPostAction } from "../../../db/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = state => ({
    posts: state.profilePage.posts,
    inputMessage: state.profilePage.inputMessage,
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
const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(MyPosts)

export default MyPostsContainer;