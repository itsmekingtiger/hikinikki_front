import axios from 'axios'

const client = axios.create({
    withCredentials: true,
});

client.defaults.baseURL = '/'
console.log(process.env.NODE_ENV);


export default client
