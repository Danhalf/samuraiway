import { connect } from "react-redux";
import {
    setCurrentPagesAC,
    setFetchingStatusAC,
    setTotalCountAC,
    setUsersAC,
    subscriberAC
} from "../../redux/Reducers/usersReducer";
import { Component } from "react";
import { AvatarGenerator } from "random-avatar-generator";
import axios from "axios";
import Users from "./Users";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

class UsersContainer extends Component {

    constructor() {
        super();
        this.avatarGenerator = new AvatarGenerator()
    }

    async componentDidMount() {
        const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`
        this.props.setFethingStatus(true)
        await axios.get(URL)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalPages(response.data.totalCount)
            })
        this.props.setFethingStatus(false)
    }

    onPageChanged = async (page) => {
        const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`
        this.props.setFethingStatus(true)
        this.props.setCurrentPage(page)
        await axios.get(URL)
            .then(response => this.props.setUsers(response.data.items))
        this.props.setFethingStatus(false)
    }


    render() {
        return <>

            { this.props.isFetching
                ? <Box sx={ { width: '100%' } }>
                    <LinearProgress color="success" sx={ { height: '12px' } }/>
                </Box>
                : <Users onPageChanged={ this.onPageChanged }
                         totalPages={ this.props.totalPages }
                         pageSize={ this.props.pageSize }
                         currentPage={ this.props.currentPage }
                         users={ this.props.users }
                         randomAvatar={ this.avatarGenerator.generateRandomAvatar() }
                         subscribe={ this.props.subscribe }
                /> }


        </>
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalPages: state.usersPage.totalPages,
    isFetching: state.usersPage.isFetching
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
        setFethingStatus: (isFetching) => {
            dispatch(setFetchingStatusAC(isFetching))
        }
    }
}

const UsersConnect = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default UsersConnect