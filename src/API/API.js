import axios from "axios";

const baseURL = `https://social-network.samuraijs.com/api/1.0/`
// const API_KEY = 'f9e64f5f-b13d-4503-bee4-e5f3c93d3bf5';
const API_KEY = 'e8f3b671-42f2-4639-bcea-c0b3e2b4a7fd';

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    }
})

const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${ currentPage }&count=${ pageSize }`).then(response => response.data)
    },
    subscribe(userId) {
        return instance.post(`follow/${ userId }`).then(response => response.data.resultCode)
    },
    unsubscribe(userId) {
        return instance.delete(`follow/${ userId }`).then(response => response.data.resultCode)
    }
}

export default usersAPI


