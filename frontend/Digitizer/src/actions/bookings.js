
import api from '../utils/api';
import {  toast } from 'react-toastify';

import {
    GET_USER_BOOKING,
    Booking_ERROR
} from './types';


export const getUserBooking = (id)=>async dispatch=>{
    try {
        const res = await api.get(`/booking/${id}`)
        console.log("data",res.data)
        dispatch({
            type: GET_USER_BOOKING,
            payload: res.data
          });

    } catch (error) {
        console.log(error)

        dispatch({
            type: Booking_ERROR,
          });
        // dispatch({
        //     type: Booking_ERROR,
        //     // payload: { msg: err.response.statusText, status: err.response.status }
        //   });
    }

}