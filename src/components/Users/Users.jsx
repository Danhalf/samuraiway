import style from './Users.module.css'
import PaginationCreate from "./PaginationCreate";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";

// const API_KEY = 'f9e64f5f-b13d-4503-bee4-e5f3c93d3bf5';
const API_KEY = 'e8f3b671-42f2-4639-bcea-c0b3e2b4a7fd';

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
                        <NavLink to={ `/profile/${ user.id }` }>
                            <img
                                src={ user.photos.small ?? props.randomAvatar }
                                className={ style.user_avatar }
                                alt=""
                            />
                        </NavLink>
                        { user.name }
                        {/*<div>{ user.location.country }</div>*/ }
                    </div>
                    {/*{ user.email }*/ }
                    <br/>
                    <button
                        className={ style.user_subscribe_btn }
                        onClick={ () => {
                            if (!user.subscribed) {
                                console.log(user.subscribed);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${ user.id }`, null, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': API_KEY
                                    }
                                }).then(response => {
                                    console.log(response);
                                    if (response.data.resultCode === 0) {
                                        props.subscribe(user.id)
                                    }
                                })
                            } else {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ user.id }`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': API_KEY
                                    }
                                }).then(response => {
                                    console.log(response);
                                    if (response.data.resultCode === 0) {
                                        props.subscribe(user.id)
                                    }
                                })
                            }


                        } }
                    >
                        { user.subscribed ? 'Unsubscribe' : 'Subscribe' }
                    </button>
                </div>
            )
        }

    </div>

}

export default Users