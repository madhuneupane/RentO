import React, { useState } from 'react';
import {useEffect} from 'react-native';
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ButtonUI from '../UI/button/ButtonUI'
import ImageGallery from './ImageGallery'

const ListingDetails = ({ id }) => {
    const item = id;
    // const item = route.params.item
    // const item = {
    //     id: '653c21014e6bbc84a2d46d28',
    //     title: "Quiet Street, Gorgeous & Bright Garden Suite",
    //     type: "House",
    //     location: "7405 4th St",
    //     longitude: -123.119790, // Corrected to a numeric value
    //     latitude: 49.272991,   // Corrected to a numeric value
    //     roomNumbers: 1,
    //     bathRoomNumbers: 2,
    //     availableDate: "2023-11-01", // Corrected the date format
    //     description: "Modern look and spacious 2 bedroom garden level suite located in a nice neighborhood.",
    //     rent: 1500,
    //     photoUrls: [
    //         "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=sr",
    //         "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=sr"
    //     ]
    // };

    console.log("my new id: ", id);

    const [selectedImage, setSelectedImage] = useState(0);
    const [photosURL, setPhotosURL] = useState(['']);
    

    const showTour = () => {
        //navigation.navigate("")
        console.log("click")
    }

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    // useEffect(() => {
    //     // Set the photosURL state with item's photoUrls
    //     setPhotosURL(item.photoUrls);
    //   }, []);

    return (
        // <View>
        //     <Text>the id is {id}</Text>
        // </View>
        <ScrollView>
            <View>
                {/* Gallery Header Image */}
                {/* <ScrowView horizontal>
                    <View>
                        <ImageGallery photoUrls={photoUrls} />
                    </View>
                </ScrowView> */}

                {/* Thumbnail Gallery
                <ScrollView horizontal>
                    {images.map((imagePath, index) => (
                        <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
                            <Image
                                source={imagePath}
                                style={{ width: 130, height: 130, borderWidth: selectedImage === index ? 2 : 0 }}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView> */}
                <ButtonUI
                    item={{ value: '3D Tour Available' }}
                    customStyle={styles.button}
                    selectedItems={showTour}
                />
                
                <View style={styles.container}>
                <Text>OUR ID {id}</Text>
                    <Text style={styles.rent}>$ {item.rent}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                    <Text style={styles.location}>{item.roomNumbers} bd | {item.bathRoomNumbers} ba | {item.type} </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.titles}>Description</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.titles}>Amenities</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.titles}>Utilities Included</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>


            </View>
        </ScrollView>

    );
};

export default ListingDetails;

const styles = StyleSheet.create({
    button: {
        // width: 264,
        // height: 56,
        // position: 'absolute',
        // bottom: -90, // Adjust as needed
        // left: '50%',
        // marginLeft: -132, // Center the button horizontally
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 18,
        // borderRadius: 30,
        // backgroundColor: 'transparent',
        // background: 'linear-gradient(0deg, #36827F, #36827F), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)',
    },
    titles: {
        fontWeight: "bold"
    }
})