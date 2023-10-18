import {Text, View} from 'react-native'
import { useReducer, useEffect, useState } from 'react'
import ButtonUI from '../UI/button/ButtonUI'
import List from '../list/List'
import { listingOptions } from '../static/ListingOptions'
import PropertyReducerOwner from '../reducers/PropertyReducerOwner'
const OwnerOnboarding1 = ({navigation})=>{
    
    const [placeType, dispatch] = useReducer(PropertyReducerOwner,{
        placeType:''
    })
    

    useEffect(()=>{
       // console.log(placeType);
       if(placeType.placeType)
        navigation.navigate("owner_onboarding2",placeType)

    },[placeType])

    const selectedItems = (value, type)=>{
        //console.log(type,value);
        dispatch({value:value})
        
        
    }
return(
    <View>
        <Text>What kind of place do you want to list?</Text>
        <View>
        <List
                numColumns={listingOptions.placeType.length/3}
                items={listingOptions.placeType}
                selectedItems={selectedItems} 
                        type='place_type' /> 
        </View>
    </View>
)
}

export default OwnerOnboarding1