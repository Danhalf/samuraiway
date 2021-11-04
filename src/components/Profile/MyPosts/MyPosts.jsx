import styles from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


function MyPosts(props) {
    const postElements = props.posts.map((post, index) =>
        <MyPost key={ index + post.id } message={ post.message }
                likes={ post.likesCount }
                avatar={ post.userAvatar }
        />)

    const onChangeText = (evt) => {
        let text = evt.target.value
        props.changeText(text)
    }

    const onAddPost = () => props.addPost()

    return (
        <div>
            <div className={ styles.posts }>
                <h3>My posts</h3>
                <div className={ styles.add__post }>
                    <TextField
                        label="Обновите ваш статус!"
                        onChange={ onChangeText }
                        value={ props.inputMessage }
                    />
                    <Button
                        variant="contained" endIcon={ <AddIcon/> }
                        onClick={ onAddPost }
                        disabled={ props.buttonDisabled }
                        sx={ { height: '100%' } }>
                        Add post
                    </Button>
                </div>

                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;