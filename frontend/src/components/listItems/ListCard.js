import React from 'react'
import { Card,Text } from '@rneui/themed'
import {View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const ListCard = ({ navigation,item }) => {
 //console.log("item:" +JSON.stringify(item))

 const goToDetails = (item)=>{
    navigation.navigate("listing_details",{item})
    
   
 }
  return (
    <TouchableOpacity onPress={()=>goToDetails(item)}>
    <Card >
      <Text>Title:{item.title}</Text>
      <Text>Type:{item.type}</Text>
      <Text>Location:{item.location}</Text>  
      <Text>Rooms:{item.roomNumbers}</Text>
      <Text>BathRooms:{item.bathRoomNumbers}</Text> 
      <Text>Pet: {item.pet ? 'Allowed' : 'NotAllowed'}</Text>
      <Text>Parking Space: {item.parkingSpace?'Available': 'Not Available'}</Text>
    </Card>
    </TouchableOpacity>
  )
}

export default ListCard