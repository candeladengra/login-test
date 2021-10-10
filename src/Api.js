import axios from 'axios';

const URL = 'http://localhost:8000';

export default {
    login(data) {
        return axios.post(URL + '/login', data, {});
    },
}
