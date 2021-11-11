import axios from 'axios'

const client = axios.create({
    withCredentials: true,
})

client.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://HOST'
console.log(process.env.NODE_ENV);


export default client
