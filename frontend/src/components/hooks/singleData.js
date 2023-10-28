import React, { useEffect, useState } from 'react'
import ApiClient from '../service/Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const singleData = (id, setSingle) => {
    const api1= new ApiClient('/fetchAllProperty')
   // console.log("from"+i);
    let token=null
    const saveToken = async () => {
        try {
            token = await AsyncStorage.getItem('token')
            const response = await api1.getSingleProperty(id)
            // console.log("response"+ JSON.stringify(response))
           //console.log("r"+JSON.stringify(response.data.data));
             setSingle(response.data.data)
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

export default singleData