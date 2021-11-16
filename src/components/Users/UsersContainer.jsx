import { connect } from "react-redux";
import { setCurrentPagesAC, setTotalCountAC, setUsersAC, subscriberAC } from "../../redux/Reducers/usersReducer";
import { Component } from "react";
import { AvatarGenerator } from "random-avatar-generator";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends Component {

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
        return <Users onPageChanged={ this.onPageChanged }
                      totalPages={ this.props.totalPages }
                      pageSize={ this.props.pageSize }
                      users={ this.props.users }
                      randomAvatar={ this.avatarGenerator.generateRandomAvatar() }
                      subscribe={ this.props.subscribe }/>

    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalPages: state.usersPage.totalPages
})
let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userId) => {
            dispatch(subscriberAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPagesAC(currentPage))
        },
        setTotalPages: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },

    }
}

const UsersConnect = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default UsersConnect