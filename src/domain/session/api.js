import axios from 'axios';
import { LOGIN_URL } from './urls';

export const loginApi = async (data) => {
    try {
        const response = await axios.post(LOGIN_URL, {
           data
        });
console.log(response)
        if(response.data.status=='success'){
            return {
                users: response.data.user
            };
        } else {
            return {
                error: true
            }
        }
    } catch(err) {
        alert("ssss")
        return {
            error: err
        }
    }
}