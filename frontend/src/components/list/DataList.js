import React from 'react'
import { FlatList } from 'react-native'
import ListCard from '../listItems/ListCard'

const DataList = ({ navigation,data }) => {
    //console.log("data:"+ JSON.stringify(data))
  return (
      <FlatList
          data={data}
          renderItem={({ item }) => (
              <ListCard navigation={navigation} item={item} />
             )}
      >         
    </FlatList>
  )
}

export default DataList