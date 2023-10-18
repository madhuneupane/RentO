import { Text, View, StyleSheet } from "react-native";
import { useReducer, useEffect, useState } from 'react'
import OwnerReducerData from "../reducers/OwnerReducer";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from '../UI/button/ButtonUI'

const OwnerOnboarding4 = ({navigation, route})=>{
    const [onBoardData,dispatch] = useReducer(OwnerReducerData,{
        placeType: route.params.placeType,
        propertyType: route.params.propertyType,
        address: route.params.address,
        amount: ''
    })
    const setData=(value,type)=>{
//console.log(value);
dispatch({value:value})

    }
    const navigateToNext = ()=>{
        console.log(onBoardData);
    }
return(
    <View>
        <Text>What is your desired rent amount?</Text>
        <View>
        <InputUI
              placeholder=' $ Enter the amount'
              selectedItems={setData}
              type="amount"
              coustomStyle={styles}
          />
        </View>
        <ButtonUI
              item={{ value: 'Continue' }}
              selectedItems={navigateToNext}
              customStyle={styles.button}
          />
    </View>
)
}
export default OwnerOnboarding4;
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