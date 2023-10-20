import React from 'react'
import { Card,Text } from '@rneui/themed'
const ListCard = ({ item }) => {
 console.log("item:" +JSON.stringify(item))
  return (
    <Card>
      <Text>Title:{item.title}</Text>
      <Text>Type:{item.type}</Text>
      <Text>Location:{item.location}</Text>  
      <Text>Rooms:{item.roomNumbers}</Text>
      <Text>BathRooms:{item.bathRoomNumbers}</Text> 
      <Text>Pet: {item.pet ? 'Allowed' : 'NotAllowed'}</Text>
      <Text>Parking Space: {item.parkingSpace?'Available': 'Not Available'}</Text>
    </Card>
  )
}

export default ListCard