import React, { useState, useReducer, useEffect } from "react";
import { filterPropertyType } from "../static/FilterOptions";
import List from "../list/List";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "@rneui/themed";
import { InputUI } from "../UI/input/InputUI";
import { FilterReducer } from "../reducers/FilterReducer";
import { Button } from "@rneui/themed";
import ApiClient from "../service/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Filter = () => {
  const [filterTypes, dispatch] = useReducer(FilterReducer, {
    type: [],
    price_range: { min: "", max: "" },
    bedrooms: [],
    bathrooms: [],
    tour: [],
    other_details: [],
  });
  const selectedItems = (value, type) => {
    // console.log(value,type)
    dispatch({ type: type, value: value });
    console.log("type:" + JSON.stringify(filterTypes));
  };
  return (
    <View style={styles.container}>
      <View style={styles.propertyType}>
        <Text style={styles.title}>Property Type</Text>
        <List
          numColumns={filterPropertyType.propertyType.length / 2}
          items={filterPropertyType.propertyType}
          selectedItems={selectedItems}
          type="property_type"
        />
      </View>


            <View style={styles.priceRange}>
            <Text style={styles.title}>Price Range</Text>
            <View style={styles.priceRangeInput}>
            <InputUI style={styles.min} placeholder='$ min value' label='Min' selectedItems={selectedItems } type='min'/>
             <InputUI style={styles.max} placeholder='$ max value' label='Max' selectedItems={selectedItems} type='max' />
             </View>   
                
             <View style={styles.rooms}>
            <Text style={styles.title}>Bedrooms</Text>          
            <List
                numColumns={filterPropertyType.bedrooms.length}
                items={filterPropertyType.bedrooms}
                selectedItems={selectedItems} 
                type='bedrooms' />       
            </View>
                
           <View style={styles.rooms}>
            <Text style={styles.title}>Bathrooms</Text>          
            <List
                style={{ padding: 2, margin: 2, borderRadius: 2 }}
                numColumns={filterPropertyType.bathrooms.length}
                items={filterPropertyType.bathrooms}
                selectedItems={selectedItems} 
                type='bathrooms' />       
                </View>
                
            <View style={styles.tour}>
            <Text style={styles.title}>Tour</Text>          
            <List
                numColumns={filterPropertyType.tour.length/2}
                items={filterPropertyType.tour}
                selectedItems={selectedItems} 
                type='tour' />       
                </View> 

             <View style={styles.tour}>
            <Text style={styles.title}>Other Details</Text>          
            <List
                numColumns={filterPropertyType.other_details.length/2}
                items={filterPropertyType.other_details}
                selectedItems={selectedItems} 
                type='tour' />       
            </View>    
            </View>
            <Button style={styles.button} customStyle={styles.customStyle}title={'Show Results'} type='outline' ></Button>
       </View>
            )
}


export default Filter;

const styles = StyleSheet.create({

  container: {
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,

    container: {
        width: '100%'    
    }, 
     title: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,

    },
    propertyType: {
        marginBottom: 10,
        height:100,
        marginLeft: 0,
        marginTop: 0,
    },
    priceRange: {
        margin: 2,
    },
    priceRangeInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        borderColor: '#000',
        borderRadius: '30',
        margin: '5',
    },
    min:{
        width: 34,
        fontStyle: "italic",
        borderRadius: '30',
        margin: '5',
        padding: 20
    },
    max: {
        fontStyle: "italic",
        borderRadius: '30',
        margin: '5',
        padding: 20
    },
    rooms: {
        marginTop: 10,
        height:50,
        marginLeft: 0,
    },
    tour: {
        marginTop: 15,
        height: 100,
        marginLeft: 0,
    },
    button: {
        backgroundColor: '#36827F',
        height: 45,
        width:'60%',
        alignItems: 'center',
        justifyContent: 'center',
        textShadowColor: '#fff',
        borderWidth:0.2,
        borderRadius: 35,
        borderColor:'#36827F',
        margin: 5,
        marginLeft: 70,
        padding:2,
        marginBottom: 10,
        textAlign:'center',
        fontWeight:'bold',
    },
    customStyle:{
        color:"white"
    }

   
  }

});
