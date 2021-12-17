import axios from "axios";
import { Client } from "../../types";

export default async function deleteClient(id){
    console.log(id);

    const response = await axios.delete(`https://creditsserver.herokuapp.com/api/clients/${id}`);

    console.log(response);
    
    return response.data;
} 