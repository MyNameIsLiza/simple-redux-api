import axios from "axios";
import { Client } from "../../types";

export default async function get(){
    const response = await axios.get("https://creditsserver.herokuapp.com/api/clients");
    return response.data;
} 