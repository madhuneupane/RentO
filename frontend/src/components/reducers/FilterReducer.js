import {filterType} from '../static/constants'
export const FilterReducer = (state,action) => {
   console.log("action:"+action.type)
    if (action.type == filterType.property_type)
    {
        return{...state,type:[...state.type,action.value]}
    }
    
    if (action.type == filterType.price_range.min)
    {
        // console.log('action_type:'+action.type)
        return {...state,price_range:{...state.price_range,min:action.value}}
    }

    if (action.type == filterType.bedrooms)
    {
        return {...state,bedrooms:[...state.bedrooms,action.value]}
    }

    if (action.type == filterType.bathrooms)
    {
        return {...state,bathrooms:[...state.bathrooms,action.value]}
     }
    
    if (action.type == filterType.tour)
    {
        return {...state,tour:[...state.tour,action.value]}
    }
    if (action.type == filterType.other_details)
    {
        return {...state,other_details:[...state.other_details,action.value]}
    }
    return state
}