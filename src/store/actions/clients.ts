import { Client } from '../../types'
import { CLIENTS_GET_FAILURE, CLIENTS_GET_START, CLIENTS_GET_SUCCESS } from '../constants'

export function getClientsStart(): { type: typeof CLIENTS_GET_START } {
    return {
        type: CLIENTS_GET_START
    }
}

export function getClientsSuccess(clients: Client[]): { type: typeof CLIENTS_GET_SUCCESS, clients:Client[] } {
    return {
        clients,
        type: CLIENTS_GET_SUCCESS
    }
}

export function getClientsFailure(error: Error): { type: typeof CLIENTS_GET_FAILURE, error:Error } {
    return {
        error,
        type: CLIENTS_GET_FAILURE
    }
}