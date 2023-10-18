import React from 'react'
import { Text } from '@rneui/themed'
import { View } from 'react-native'
import { InputUI } from '../UI/input/InputUI'
import ButtonUI from '../UI/button/ButtonUI'
import AsyncStorage from '@react-native-async-storage/async-storage';
    import ApiClient from "../service/Api";

const PropertyDescription = ({ navigation, route }) => {

    const api = new ApiClient("/descriptionSuggest")

    const generateDesc = async () => {
        token =  await AsyncStorage.getItem('token')
        // console.log(onBoardData);
        api.getDescription(token)
    }
     
  return (
      <View>
          <InputUI
         label="Let's create a captivating property description"
          />
          <ButtonUI selectedItems={generateDesc} item={{ value: "Write for me" }} />
       
      </View>
  )
}

export default PropertyDescription