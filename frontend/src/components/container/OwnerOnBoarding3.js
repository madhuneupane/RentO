import {View,StyleSheet,Text} from 'react-native'
import {InputUI} from '../UI/input/InputUI'
import ButtonUI from '../UI/button/ButtonUI'
import { useState } from 'react'
const OwnerOnboarding3 = ({navigation, route})=>{
    const [onBoardData, setOnBoardData] = useState(
       route.params
        );
    const navigateToNext = (value, type)=>{
        setOnBoardData({...onBoardData,address:value})
        //console.log(onBoardData);

    }
return(
    <View>
    <Text>What's the address?</Text>
    <View>
    <InputUI
              placeholder=' Type your address'
              selectedItems={navigateToNext}
              type="address"
              coustomStyle={styles}
          />
   
    </View>
</View>
)
}
export default OwnerOnboarding3

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