import { Client } from '../../types'
import { CLIENTS_GET_FAILURE, CLIENTS_GET_START, CLIENTS_GET_SUCCESS, 
    CLIENT_ADD_START, CLIENT_ADD_SUCCESS, CLIENT_ADD_FAILURE,
    CLIENT_DELETE_START, CLIENT_DELETE_SUCCESS, CLIENT_DELETE_FAILURE } from '../constants'

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

export function addClientStart(): { type: typeof CLIENT_ADD_START } {
    return {
        type: CLIENT_ADD_START
    }
}

export function addClientSuccess(clients: Client[]): { type: typeof CLIENT_ADD_SUCCESS, clients:Client[] } {
    return {
        clients,
        type: CLIENT_ADD_SUCCESS
    }
}

export function addClientFailure(error: Error): { type: typeof CLIENT_ADD_FAILURE, error:Error } {
    return {
        error,
        type: CLIENT_ADD_FAILURE
    }
}

export function deleteClientStart(): { type: typeof CLIENT_DELETE_START } {
    return {
        type: CLIENT_DELETE_START
    }
}

export function deleteClientSuccess(clients: Client[]): { type: typeof CLIENT_DELETE_SUCCESS, clients:Client[] } {
    return {
        clients,
        type: CLIENT_DELETE_SUCCESS
    }
}

export function deleteClientFailure(error: Error): { type: typeof CLIENT_DELETE_FAILURE, error:Error } {
    return {
        error,
        type: CLIENT_DELETE_FAILURE
    }
}