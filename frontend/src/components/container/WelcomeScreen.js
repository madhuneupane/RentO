import React from 'react'
import { View,StyleSheet } from 'react-native'
import ButtonUI from '../UI/button/ButtonUI'
import { InputUI } from '../UI/input/InputUI'
import { rentorCredentials } from '../static/constants'
const WelcomeScreen = ({navigation}) => {
  const showListView = () => {
      navigation.navigate("list_view")
  }
  // remove back button
  return (
    <View style={styles.container}>
     <InputUI
              placeholder=' search city'
              coustomStyle={styles}
          />
          <ButtonUI
           item={{ value: 'Show' }}
           customStyle={styles.button}
            selectedItems={showListView}
             />   
    </View>
  )
}

export default WelcomeScreen

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