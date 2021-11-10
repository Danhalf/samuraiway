import style from './Users.module.css'
import axios from "axios";
import { AvatarGenerator } from "random-avatar-generator";
import { Component } from "react";

// const avatarGenerator = new AvatarGenerator()
const pageCount = 100

class Users extends Component {

    constructor() {
        super();
        this.avatarGenerator = new AvatarGenerator()
    }

    componentDidMount() {
        const URL = `https://social-network.samuraijs.com/api/1.0/users?count=${ pageCount }`

        axios.get(URL)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {


        return <div>
            {
                this.props.users.map((user) =>
                    <div className={ style.user_block } key={ user.id }>
                        <div>
                            <img
                                src={ user.photos.small ?? this.avatarGenerator.generateRandomAvatar() }
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
                            onClick={ () => this.props.subscribe(user.id) }
                        >
                            { user.subscribed ? 'Unsubscribe' : 'Subscribe' }
                        </button>
                    </div>
                )
            }

        </div>

    }
}

export default Users