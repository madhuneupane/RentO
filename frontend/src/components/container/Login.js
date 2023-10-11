import React from 'react'
import ButtonUI from '../UI/button/ButtonUI'
import { Text,View,StyleSheet } from 'react-native'
const Login = ({navigation}) => {
    
    const selectedItems = (value, type) => {
        navigation.navigate(type)
 }
  return (
      <View style={styles.container}> 
      <View style={styles.subContainer}>
        <View style={styles.buttonView}>
          <ButtonUI
              item={{ value: `I'm  looking for a new Place` }}
              customStyle={styles.button}
              selectedItems={selectedItems}
                  type='rentor' />
          </View>
          
          <View style={styles.buttonView}>
          <ButtonUI
              item={{ value: `I want to post a listing` }}
              customStyle={styles.button}
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
    height:'80%'
    },
    button: {
    borderWidth:3,
    borderRadius: 15,
    fontSize: 22,
    // margin: 10,
    // justifyContent:'center'
    },

    buttonView: {
        width: '100%' ,
        margin: 5,
        padding: 4,
        alignItems: 'center',        
    }
})