import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import data from '../hooks/data'
import DataList from '../list/DataList'
const Listings = ({navigation}) => {
  showFilter = () => {
      navigation.navigate('rentor')
  }
  const [listData, setListData] = useState()
  data(setListData)
  return (
    <View>
      <TouchableOpacity onPress={showFilter}>
        <Text>Filter</Text>
        </TouchableOpacity>
        {listData && <DataList data={listData} />}   
    </View>
  )
}

export default Listings