import React, { useEffect, useState } from 'react'
import ApiClient from '../service/Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = ({email,password}) => {
    const apiClient = new ApiClient(`/fetchSingleUser/${email}/${password}`)
    const api1= new ApiClient('/fetchAllProperty')

    const getToken = async () => {
        
       try {
         apiClient.loginUser()
       }
       catch (error){
           console.log(error)
        }
   }
     const saveToken = async() => {
        const token = await AsyncStorage.getItem('token')
         api1.getAllData(token)
       console.log("token:"+token)
    }

    useEffect(() => {
        getToken()
        // saveToken()
    },[])

      
 
}

export default login