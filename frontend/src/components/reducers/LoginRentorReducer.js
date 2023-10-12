import React from 'react'
import {rentorCredentials} from '../static/constants'

const LoginRentorReducer = (state,action) => {   
    switch (action.type)
    {
        case rentorCredentials.email:
        return { ...state, email:action.value }
        
        case rentorCredentials.password:
            return { ...state, password:action.value  }
        
        default:
        state
    }

}

export default LoginRentorReducer