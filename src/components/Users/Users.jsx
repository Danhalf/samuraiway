import style from './Users.module.css'


const Users = (props) => {
    const pagesCount = Math.ceil(props.totalPages / props.pageSize)

    let pages = [ 1 ];

    for (let i = 1; i <= pagesCount; i++) {
        i === 3 && pages.push(i)
        i === pagesCount && pages.push(pagesCount);

    }
    return <div>

        <ul className={ style.paggination }>
            { pages.map(page =>
                <li
                    className={ props.currentPage === page && style.selectedPage }
                    key={ page }
                    onClick={ () => props.onPageChanged(page) }
                >
                    { page }
                </li>) }

        </ul>
        {
            props.users.map((user) =>
                <div className={ style.user_block } key={ user.id }>
                    <div>
                        <img
                            src={ user.photos.small ?? props.randomAvatar }
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