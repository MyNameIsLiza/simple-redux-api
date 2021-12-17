import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import get from '../services/api/get';
import { getClientsFailure, getClientsStart, getClientsSuccess } from '../store/actions/clients';
import './Home.css';

function Home() {
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
    return (
        <div className="Home">
            <button id='fetch_button' onClick={getClients}>Fetch all clients</button>
            {
            !!clients.length &&<table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>surname</th>
                        <th>name</th>
                        <th>middle_name</th>
                        <th>address</th>
                        <th>telephone</th>
                    </tr>
                </thead>
                <tbody>{clients.map((client) => <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.surname}</td>
                    <td>{client.name}</td>
                    <td>{client.middle_name}</td>
                    <td>{client.address}</td>
                    <td>{client.telephone}</td>
                </tr>)}
                </tbody>
            </table>
            }
        </div>
    );
}

export default Home;