import { Component } from 'react';
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/Reducers/authReducer";

class HeaderContainer extends Component {

    componentDidMount() {
        const URL = `https://social-network.samuraijs.com/api/1.0/auth/me`
        axios.get(URL, {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    const { id, email, login } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header { ...this.props }/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
