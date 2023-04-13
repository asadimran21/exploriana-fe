import axios from "axios";
import { baseUrl } from "../app.config";

const api = axios.create( {
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json"
    }
} );

export const getTours = () => api.get( "/" );

export const createTour = ( data ) => api.post( "/tour", data );

export const updateTour = ( id, data ) => api.patch( `/tour/${id}`, data );

export const deleteTour = ( id ) => api.delete( `/tour/${id}`, {data:data} );

"/tour/:id"

"/tour/" + id + "/update"

`/tour/${id}/update`