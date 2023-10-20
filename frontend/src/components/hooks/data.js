import React, { useEffect, useState } from 'react'
import ApiClient from '../service/Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = (setListData) => {
    const api1= new ApiClient('/fetchAllProperty')
    let token=null
    const saveToken = async () => {
        try {
            token = await AsyncStorage.getItem('token')
            const response = await api1.getAllData(token)
            // console.log("response"+ JSON.stringify(response))
            setListData(response)
        }
        catch (error){
           console.log(error)
        }
          }

    useEffect(() => {
        console.log("test")
        saveToken()
    }, [])
      
 
}

export default data