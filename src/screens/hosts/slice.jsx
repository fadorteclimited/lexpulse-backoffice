import {createSlice} from "@reduxjs/toolkit";


const HostSlice = createSlice(
    {
        name: 'HostSlice',
        initialState: {
            Hosts: [],
            currentHost: {},
            loadingHosts: false,
            loadingCurrentHost: false,
            error: false
        }
    }
)

export default HostSlice;