import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const Owner = ({navigation}) => {

  const showListing = ()=>{
    navigation.navigate('owner_onboarding1')
  }
  return (
    <View>
      <TouchableOpacity onPress={showListing}>
        <Text>New Listing</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Owner