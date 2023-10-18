import React from "react";

const OwnerReducerData = (state, action)=>{
    return{...state,amount: action.value}
}
export default OwnerReducerData