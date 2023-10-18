
import qs from 'qs'
import axios from 'axios'
import { BASE_URL } from '../static/ApiConstants'

import AsyncStorage from '@react-native-async-storage/async-storage';

let testtoken
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
             testtoken= await AsyncStorage.getItem('token')
            ) 
    }

    getAllData = async (headers) => {
        apiInstance.defaults.headers.common['Authorization'] = headers;
        console.log('toke:'+JSON.stringify(headers))
        const response = await apiInstance.get(this.endpoint)
        return response.data
    }
    getDescription = async (token,ownerSelections) => { 
        console.log("t: "+token)
     apiInstance.defaults.headers.common['Authorization'] = token;
       const response= await apiInstance.post(this.endpoint, { content: ownerSelections})
        console.log("description: "+JSON.stringify(response.data)) 
        return response.data   
    }
}

export default ApiClient
