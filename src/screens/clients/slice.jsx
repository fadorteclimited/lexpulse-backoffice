import {createSlice} from "@reduxjs/toolkit";


const ClientSlice = createSlice(
    {
        name: 'ClientSlice',
        initialState: {
            clients: [],
            currentClient: {},
            loadingClients: false,
            loadingCurrentClient: false,
            error: false
        }
    }
)

export default ClientSlice;