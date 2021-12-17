import axios from "axios";
import { Client } from "../../types";

export default async function addClient(client){
    console.log(client);

    const response = await axios.post("https://creditsserver.herokuapp.com/api/clients/register", {
        "surname": client.surname,
        "name": client.name,
        "middle_name": client.middle_name,
        "address": client.address,
        "telephone": client.telephone
    });

    console.log(response);
    
    return response.data;
} 