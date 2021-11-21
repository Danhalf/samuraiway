import style from './Users.module.css'
import PaginationCreate from "./PaginationCreate";
import { TextField } from "@mui/material";


const Users = (props) => {
    const pagesCount = Math.ceil(props.totalPages / props.pageSize)

    const pages = PaginationCreate(pagesCount, 3, props.currentPage)

    const changePageByInput = (page) => {
        props.onPageChanged(page)

    }

    return <div>

        <ul className={ style.pagination }>
            { pages.map(page =>
                <li
                    className={ props.currentPage === page && style.selectedPage }
                    key={ page + Math.random() }
                    onClick={ () => props.onPageChanged(page) }
                >
                    { page }
                </li>
            )
            }
        </ul>
        <div className={ style.setPageInput }>
            <TextField id="standard-basic"
                       label="Set page"
                       variant="standard"
                       sx={ { width: '100%' } }
                       onInput={ (e) => changePageByInput(e.target.value) }
            />
        </div>

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