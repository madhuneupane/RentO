import React, { useState } from 'react'
import ButtonUI from '../UI/button/ButtonUI'
import { Text,View,StyleSheet } from 'react-native'
import singleData from '../hooks/singleData'
const Login = ({navigation}) => {
  const [single, setSingle]=useState();
 singleData("653c21014e6bbc84a2d46d28",setSingle); 
 //console.log("yo", single);
    
    const selectedItems = (value, type) => {
        navigation.navigate(type)
 }
  return (
      <View style={styles.container}> 
      <View style={styles.subContainer}>
        <View style={styles.buttonView}>
          <ButtonUI
              item={{ value: `I'm  looking for a new Place` }}
              customStyle={styles.showPost}
              
              selectedItems={selectedItems}
                  type='login_rentor' />
          </View>
          
          <View style={styles.buttonView}>
          <ButtonUI
              item={{ value: `I want to post a listing` }}
              customStyle={styles.doPost}
              selectedItems={selectedItems}
                  type='owner' />
              </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {

    },
    subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
    },
    showPost: {
    width: '80%',
    display: 'flex', 
    flexDirection: 'column',   
    borderWidth:1,
    borderRadius: 25,
    padding:15,
    fontSize: 20,
    fontWeight: '500',
    borderColor:'#36827F',
    backgroundColor: '#36827F',
    margin: 8,
    color:'#fff',

    // margin: 10,
    // justifyContent:'center'
    },

    doPost: {
      width: '80%',
      display: 'flex', 
      flexDirection: 'column',   
      borderWidth:1,
      borderRadius: '25',
      padding:15,
      fontSize: 20,
      fontWeight: '500',
      borderColor:'#f26808',
      backgroundColor: '#f26808',
      margin: 8,
      color:'#000',
      paddingLeft: '10%',
      paddingRight: '10%',
      },

    buttonView: {
        width: '100%' ,
        margin: 5,
        padding: 4,
        alignItems: 'center',        
    }
})