import {GET_USER_BOOKING,Booking_ERROR} from '../actions/types'

const initialState = {
    bookings :[],
    loading:true
}

export default function(state = initialState, action){
    const {type,payload }=action

    switch(type){
        case GET_USER_BOOKING:
            return {
                ...state,
                loading:false,
                bookings:payload,
            }
        case Booking_ERROR:
            return{
                ...state,
                loading:false,
                bookings:[],
            }
        default:
                return state;
         }   
}