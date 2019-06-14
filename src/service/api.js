import axios from "axios"

const api = axios.create({
    baseURL: "http://10.42.0.1:3000",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },  
})
export default {
    get: () => {
        return api.get('/posts')
    }
}

