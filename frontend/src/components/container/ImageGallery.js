import React from 'react';
import { View, Image, ScrollView } from 'react-native';


const ImageGallery = ({ photoUrls }) => {
    // Your code for dynamically rendering images will go here.
    
        return (
          <ScrollView>
            {photoUrls.map((index,url)=>{
                <Image key={index} source={{ uri: url }} style={{ width: 200, height: 200 }} />
            })}
          </ScrollView>
        );
    
        
  };
  
export default ImageGallery;