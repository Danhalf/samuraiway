import React from 'react';
import styles from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import { updatePostMessageActionCreator, addPostActionCreator } from "../../../db/profileReducer";
import { TextField, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


function MyPosts(props) {
    const postElements = props.state.posts.map((post, index) =>
        <MyPost key={ index + post.id } message={ post.message }
                likes={ post.likesCount }
                avatar={ props.avatar }
        />)

    const changeText = (evt) => {
        let text = evt.target.value
        props.dispatch(updatePostMessageActionCreator(text))
        isDisabled()
    }

    const addPost = () => props.dispatch(addPostActionCreator())
    const isDisabled = () => props.state.inputMessage === ''

    return (
        <div>
            <div className={ styles.posts }>
                <h3>My posts</h3>
                <div className={ styles.add__post }>
                    <TextField label="Обновите ваш статус!" onChange={ changeText }
                               value={ props.state.inputMessage }/>
                    <Button variant="contained" endIcon={ <AddIcon/> } onClick={ addPost } disabled={ isDisabled() }
                            sx={ { height: '100%' } }> Add
                        post</Button>
                </div>

                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;