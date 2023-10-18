
import qs from 'qs'
import axios from 'axios'
import { BASE_URL } from '../static/ApiConstants'

import AsyncStorage from '@react-native-async-storage/async-storage';

let token
const url=BASE_URL
const apiInstance = axios.create({
    baseURL: url,
    params: {
    },
})


class ApiClient{

    constructor(endpoint)
    {
        console.log('en:'+endpoint)
       this.endpoint=endpoint
    }

    loginUser = async () => {
        console.log('endpoint:' + this.endpoint)
        await apiInstance.get(this.endpoint).then(response =>
        AsyncStorage.setItem('token', response.data.token)
        ).then(
             token= await AsyncStorage.getItem('token')
            ) 
    }

    getAllData = async (headers) => {
        apiInstance.defaults.headers.common['Authorization'] = headers;
        console.log('toke:'+JSON.stringify(headers))
        const response = await apiInstance.get(this.endpoint)
        return response.data
    }
}

export default ApiClient
