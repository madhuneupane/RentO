import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Filter from './Filter'
const Listings = ({navigation}) => {
  showFilter = () => {
      navigation.navigate('rentor')
    }
  return (
    <View>
      <TouchableOpacity onPress={showFilter}>
        <Text>Filter</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Listings