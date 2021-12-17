import { Client } from "../../types";
import { getClientsFailure, getClientsStart, getClientsSuccess, 
    addClientStart, addClientSuccess, addClientFailure,
    deleteClientStart, deleteClientFailure, deleteClientSuccess
} from "../actions/clients";
import { CLIENTS_GET_FAILURE, CLIENTS_GET_START, CLIENTS_GET_SUCCESS, CLIENT_ADD_START, CLIENT_ADD_SUCCESS, CLIENT_ADD_FAILURE, CLIENT_DELETE_START, CLIENT_DELETE_FAILURE, CLIENT_DELETE_SUCCESS } from "../constants";

export interface ClientsState {
    error: Error | null;
    isLoading: boolean;
    clients: Client[];
}

export default function clientsReducer(
    state: ClientsState = { error: null, isLoading: false, clients: [] },
    action: ReturnType<typeof getClientsStart>
        | ReturnType<typeof getClientsSuccess>
        | ReturnType<typeof getClientsFailure>
        | ReturnType<typeof addClientStart>
        | ReturnType<typeof addClientSuccess>
        | ReturnType<typeof addClientFailure>
        | ReturnType<typeof deleteClientStart>
        | ReturnType<typeof deleteClientSuccess>
        | ReturnType<typeof deleteClientFailure>) {
            
    switch (action.type) {
        case CLIENTS_GET_START: return { ...state, isLoading: true };
        case CLIENTS_GET_SUCCESS: return { ...state, error: null, isLoading: false, clients: action.clients };
        case CLIENTS_GET_FAILURE: return { ...state, error: action.error, isLoading: false, clients: [] };
        
        case CLIENT_ADD_START: return { ...state, isLoading: true };
        case CLIENT_ADD_SUCCESS: return { ...state, error: null, isLoading: false, clients: action.clients };
        case CLIENT_ADD_FAILURE: return { ...state, error: action.error, isLoading: false, clients: [] };
    
        case CLIENT_DELETE_START: return { ...state, isLoading: true };
        case CLIENT_DELETE_SUCCESS: return { ...state, error: null, isLoading: false, clients: action.clients };
        case CLIENT_DELETE_FAILURE: return { ...state, error: action.error, isLoading: false, clients: [] };
    }
}