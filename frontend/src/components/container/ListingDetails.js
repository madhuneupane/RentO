import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ButtonUI from '../UI/button/ButtonUI'

const ListingDetails = ({ navigation, route }) => {
    const item = route.params.item
    console.log("data!! this", item.rent);

    const [selectedImage, setSelectedImage] = useState(0);


    const images = [
        require('../../../assets/house2.jpg'),
        require('../../../assets/house3.jpg'),
        require('../../../assets/house4.jpg'),
        // Add more image paths
    ];

    const showTour = () => {
        //navigation.navigate("")
        console.log("click")
    }

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    return (
        <ScrollView>
            <View>
                {/* Gallery Header Image */}
                <Image
                    source={require('../../../assets/house1.jpeg')}
                    style={{ width: 390, height: 423 }}
                />
    
                {/* Thumbnail Gallery */}
                <ScrollView horizontal>
                    {images.map((imagePath, index) => (
                        <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
                            <Image
                                source={imagePath}
                                style={{ width: 130, height: 130, borderWidth: selectedImage === index ? 2 : 0 }}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ButtonUI
                    item={{ value: '3D Tour Available' }}
                    customStyle={styles.button}
                    selectedItems={showTour}
                />
                <View style={styles.container}>
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