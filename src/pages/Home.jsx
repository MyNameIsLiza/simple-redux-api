import { useCallback, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import get from '../services/api/get';
import addClient from '../services/api/addClient';
import deleteClient from '../services/api/deleteClient';
import {
    getClientsFailure, getClientsStart, getClientsSuccess,
    addClientStart, addClientSuccess, addClientFailure,
    deleteClientFailure, deleteClientStart, deleteClientSuccess
} from '../store/actions/clients';
import './Home.css';

function Home() {

    const surname = useRef();
    const name = useRef();
    const middle_name = useRef();
    const address = useRef();
    const telephone_number = useRef();

    const dispatch = useDispatch();
    const [clients, setClients] = useState([]);
    const getClients = useCallback(() => {
        dispatch(getClientsStart());
        get().then((data) => {
            setClients(data.result);

            dispatch(getClientsSuccess(data));
        }).catch((error) => {
            dispatch(getClientsFailure(error));
        });

    }, []);
const removeClient = useCallback((e) => {
        dispatch(deleteClientStart());
        deleteClient(e.target.dataset.id).then((data) => {
            getClients();
            dispatch(deleteClientSuccess(data));
        }).catch((error) => {
            dispatch(deleteClientFailure(error));
        });

    }, []);
    const submitForm = useCallback((e) => {
        e.preventDefault();
        dispatch(addClientStart());
        addClient({
            middle_name: middle_name.current.value,
            name: name.current.value,
            surname: surname.current.value,
            telephone: telephone_number.current.value,
            address: address.current.value
        }).then((data) => {
            getClients();
            dispatch(addClientSuccess(data));
        }).catch((error) => {
            dispatch(addClientFailure(error));
        });

    }, []);

    return (
        <div className="Home">
            <button id='fetch_button' onClick={getClients}>Fetch all clients</button>
            {
                !!clients.length && <table>
                    <thead>
                        <tr>
                            <th>surname</th>
                            <th>name</th>
                            <th>middle_name</th>
                            <th>address</th>
                            <th>telephone</th>
                        </tr>
                    </thead>
                    <tbody>{clients.map((client) => <tr key={client.id}>
                        <td>{client.surname}</td>
                        <td>{client.name}</td>
                        <td>{client.middle_name}</td>
                        <td>{client.address}</td>
                        <td>{client.telephone}</td>
                        <td><button data-id={client.id} onClick={removeClient}>Delete</button></td>
                    </tr>)}
                    </tbody>
                </table>
            }
            <form className="form flex flex-direction_column" onSubmit={submitForm}>
                <label htmlFor="surname">Surname</label>
                <input ref={surname} id="surname" type="text" required />
                <label htmlFor="name">Name</label>
                <input ref={name} id="name" type="text" required />
                <label htmlFor="middle_name">Middle name</label>
                <input ref={middle_name} id="middle_name" type="text" required />
                <label htmlFor="address">Address</label>
                <input ref={address} id="address" type="text" required />
                <label htmlFor="telephone_number">Telephone number</label>
                <input ref={telephone_number} id="telephone_number" type="telephone" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Home;