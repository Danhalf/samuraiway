import style from './Users.module.css'
import axios from "axios";
import { AvatarGenerator } from "random-avatar-generator";

const Users = (props) => {

    if (props.users.length === 0) {
        const URL = `https://social-network.samuraijs.com/api/1.0/users`

        axios.get(URL)
            .then(response => props.setUsers(response.data.items))
    }

    const avatarGenerator = new AvatarGenerator();

    props.users.map(user => user.photos.small = avatarGenerator.generateRandomAvatar())


    return <div>
        {
            props.users.map((user) =>
                <div className={ style.user_block } key={ user.id }>
                    <div>
                        <img
                            src={ user.photos.small }
                            className={ style.user_avatar }
                            alt=""
                        />
                        { user.name }
                        {/*<div>{ user.location.country }</div>*/ }
                    </div>
                    {/*{ user.email }*/ }
                    <br/>
                    <button
                        className={ style.user_subscribe_btn }
                        onClick={ () => props.subscribe(user.id) }
                    >
                        { user.subscribed ? 'Unsubscribe' : 'Subscribe' }
                    </button>
                </div>
            )
        }
    </div>

}

export default Users