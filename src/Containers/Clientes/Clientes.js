import React from 'react';

const Clientes = (props) => {
    const onFetchClients = async () => {
        try {
            const token = await props.user.getIdToken();

            const user = await fetch('http://localhost:4000/clientes', {
                headers: {
                    'id_token': token
                }
            }).then(data => data.json());

            console.log(user);
        } catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <h3>Clientes</h3>
            <button onClick={onFetchClients}>Fetch Clients</button>
        </>
    )
};

export default Clientes;
