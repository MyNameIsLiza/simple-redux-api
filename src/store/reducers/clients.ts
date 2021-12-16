import { Client } from "../../types";
import { getClientsFailure, getClientsStart, getClientsSuccess } from "../actions/clients";
import { CLIENTS_GET_FAILURE, CLIENTS_GET_START, CLIENTS_GET_SUCCESS } from "../constants";

export interface ClientsState {
    error: Error | null;
    isLoading: boolean;
    clients: Client[];
}

export default function clientsReducer(
    state: ClientsState = { error: null, isLoading: false, clients: [] },
    action: ReturnType<typeof getClientsStart>
        | ReturnType<typeof getClientsSuccess>
        | ReturnType<typeof getClientsFailure>) {
            
    switch (action.type) {
        case CLIENTS_GET_START: return { ...state, isLoading: true };
        case CLIENTS_GET_SUCCESS: return { ...state, error: null, isLoading: false, clients: action.clients };
        case CLIENTS_GET_FAILURE: return { ...state, error: action.error, isLoading: false, clients: [] };
    }
}