import React, { useState } from 'react'
import { Text } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'
import { InputUI } from '../UI/input/InputUI'
import ButtonUI from '../UI/button/ButtonUI'
import AsyncStorage from '@react-native-async-storage/async-storage';
    import ApiClient from "../service/Api";

const PropertyDescription = ({ navigation, route }) => {
    const keywords = route.params
    const [desc, setDesc] = useState("")
    const key=`${keywords.placeType} place type, ${keywords.propertyType} property type, ${keywords.address} location, ${keywords.amount} rent`
    const ownerSelections = `Place Type: ${keywords.placeType},Property Type:${keywords.propertyType},Address: ${keywords.address},Amount: ${keywords.amount}`
    console.log("keyword:"+ JSON.stringify(keywords))
    const api = new ApiClient("/descriptionSuggest")

    const generateDesc = async () => {
        token =  await AsyncStorage.getItem('token')
        // console.log(onBoardData);
        const response = await api.getDescription(token, key)
               console.log("description2: "+JSON.stringify(response)) 
        const result=JSON.stringify(response)
        setDesc(response)
    }
     
  return (
      <View>
          <View style={styles}>
              {console.log("desc:"+JSON.stringify(desc))}
          <InputUI
         label="Let's create a captivating property description"
        value={desc?desc:ownerSelections}
        coustomStyle ={styles.subContainer}
              />
        </View>
          <ButtonUI selectedItems={generateDesc} item={{ value: "Write for me" }} />
       
      </View>
  )
}

export default PropertyDescription

const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'center',
        // height:'80%'
    },
    subContainer: {
        height: "100%",
        backgroundColor:'grey'
    },
    inputContainer: {
       height:"100%" 
    }
})