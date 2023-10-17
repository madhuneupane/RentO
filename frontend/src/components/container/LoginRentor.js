import { Image } from '@rneui/themed'
import React, { useReducer, useState } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {InputUI} from '../UI/input/InputUI'
import ButtonUI from '../UI/button/ButtonUI'
import { rentorCredentials } from '../static/constants'
import LoginRentorReducer from '../reducers/LoginRentorReducer'
const LoginRentor = ({navigation}) => {

    const [credentials, dispatch] = useReducer(LoginRentorReducer, {
        email: '',
        password:''
    })
    const callLoginApi = () => {
        console.log('credentials:' + JSON.stringify(credentials))
        navigation.navigate("welcome")
    }

    const saveCredentials = (value,type) => {
        dispatch({value:value,type:type})
    }
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Glad to see you back!</Text>
          {/* <Image source={{ uri:}}></Image> */}
          <InputUI
              placeholder=' Type your email'
              selectedItems={saveCredentials}
              type={rentorCredentials.email}
              coustomStyle={styles}
          />
          <InputUI
              placeholder=' Password'
              selectedItems={saveCredentials}
              type={rentorCredentials.password}
              coustomStyle={styles}
          />
          <ButtonUI
              item={{ value: 'Sign in' }}
              selectedItems={callLoginApi}
              customStyle={styles.button}
          />
          
    </View>
  )
}

export default LoginRentor


const styles = StyleSheet.create({
  container: {
        height: '70%',
        justifyContent: 'center',
        margin: 10,
        padding:10   
    },
    subContainer: {
        alignItems:'center'
    },
  textInput: {
      fontSize: 15,
      height: 30,
      width: '100%',
      borderRadius: 7,
      textAlign:'auto'
    },
    button: {
    borderWidth:1.5,
    borderRadius: 15,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    height:35
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:'20'
    }
})