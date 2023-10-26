import React from 'react'

const ImageReducer = (state, action) => {
    console.log("action:"+action.type)
    switch (action.type)
    {
        case "image1":
            return { ...state, image1: action.value }
        case "image2":
            return { ...state, image2: action.value }
        case "image3":
            return { ...state, image3: action.value }
        case "image4":
            return { ...state, image4: action.value }
        case "image5":
            return { ...state, image5: action.value }
        case "image6":
            return { ...state, image6: action.value }
        default: 
        return state
    }
}

export default ImageReducer