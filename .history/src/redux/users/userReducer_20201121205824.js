import _getUsers from "../../_DATA";
import {GET_USERS_SUCCESS,GET_USERS_FAILURE} from './userType'

const initialState = {
    users: []
}

const user = (state= initialState, action){
    switch(action.type){
        case GET_USERS_SUCCESS:
            return{
                ...state,
                users: action.payload
            }
            break
            case 
    }
}