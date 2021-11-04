import style from './Users.module.css'

const Users = (props) => {


    return <div>
        {
            props.users.map(user =>
                <div className={ style.user_block } key={ user.id }>
                    <div>
                        <img
                            src={ user.userAvatar }
                            className={ style.user_avatar }
                            alt=""
                        />
                        { user.fullName }
                        <div>{ user.location.country } - { user.location.city }</div>
                    </div>
                    { user.status }
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