import {Text, View} from 'react-native'
import { useState } from 'react'
import { listingOptions } from '../static/ListingOptions'
import List from '../list/List'

const OwnerOnboarding2 = ({navigation,route})=>{
//const [propertyType, setPropertyType] = useState("")
    const selectedItems = (value, type)=>{
//console.log(route.params);
let onBoardData = {
    placeType: route.params.placeType,
    propertyType: value
}
navigation.navigate("owner_onboarding3",onBoardData)
    }
    return(
    <View>
    <Text>What is your property type?</Text>
    <View>
    <List
            numColumns={listingOptions.propertyType.length/5}
            items={listingOptions.propertyType}
            selectedItems={selectedItems} 
                    type='property_type' /> 
    </View>
</View>
    )
}

export default OwnerOnboarding2