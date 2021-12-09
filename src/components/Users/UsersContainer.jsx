import { connect } from "react-redux";
import {
    setCurrentPage,
    setFetchingStatus,
    setTotalPages,
    setUsers,
    subscribe,
    toggleFollowButtonDisabled
} from "../../redux/Reducers/usersReducer";
import { Component } from "react";
import { AvatarGenerator } from "random-avatar-generator";
import Users from "./Users";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import usersAPI from "../../API/API";

class UsersContainer extends Component {

    constructor() {
        super();
        this.avatarGenerator = new AvatarGenerator()
    }

    async componentDidMount() {
        this.props.setFetchingStatus(true)
        await usersAPI.getUsers(
            this.props.currentPage,
            this.props.pageSize
        )
            .then(response => {
                this.props.setUsers(response.items)
                this.props.setTotalPages(response.totalCount)
            })
        this.props.setFetchingStatus(false)
    }

    onPageChanged = async (page) => {
        this.props.setFetchingStatus(true)
        this.props.setCurrentPage(page)
        await usersAPI.getUsers(page, this.props.pageSize)
            .then(response => this.props.setUsers(response.items))
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
                         followButtonDisabled={ this.props.followButtonDisabled }
                         toggleFollowButtonDisabled={ this.props.toggleFollowButtonDisabled }
                /> }


        </>
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalPages: state.usersPage.totalPages,
    isFetching: state.usersPage.isFetching,
    followButtonDisabled: state.usersPage.followButtonDisabled
})

const UsersConnect = connect(mapStateToProps,
    {
        setUsers,
        subscribe,
        setTotalPages,
        setCurrentPage,
        setFetchingStatus,
        toggleFollowButtonDisabled
    })(UsersContainer)

export default UsersConnect