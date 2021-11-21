import { connect } from "react-redux";
import {
    setCurrentPage,
    setFetchingStatus,
    setTotalPages,
    setUsers,
    subscribe
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
        this.props.setFetchingStatus(true)
        await axios.get(URL)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalPages(response.data.totalCount)
            })
        this.props.setFetchingStatus(false)
    }

    onPageChanged = async (page) => {
        const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`
        this.props.setFetchingStatus(true)
        this.props.setCurrentPage(page)
        await axios.get(URL)
            .then(response => this.props.setUsers(response.data.items))
        this.props.setFetchingStatus(false)
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

const UsersConnect = connect(mapStateToProps,
    {
        setUsers,
        subscribe,
        setTotalPages,
        setCurrentPage,
        setFetchingStatus
    })(UsersContainer)

export default UsersConnect