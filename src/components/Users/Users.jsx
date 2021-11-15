import style from './Users.module.css'
import axios from "axios";
import { AvatarGenerator } from "random-avatar-generator";
import { Component } from "react";


class Users extends Component {

    constructor() {
        super();
        this.avatarGenerator = new AvatarGenerator()
    }

    componentDidMount() {
        const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`

        axios.get(URL)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalPages(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`
        axios.get(URL)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalPages / this.props.pageSize)

        let pages = [ 1 ];

        for (let i = 1; i <= pagesCount; i++) {
            i === 3 && pages.push(i)
            i === pagesCount && pages.push(pagesCount);

        }

        return <div>

            <ul className={ style.paggination }>
                { pages.map(page =>
                    <li
                        className={ this.props.currentPage === page && style.selectedPage }
                        key={ page }
                        onClick={ () => this.onPageChanged(page) }
                    >
                        { page }
                    </li>) }

            </ul>
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