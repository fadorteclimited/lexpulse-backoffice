import {Button, Table, Tag} from "antd";
import {getClients, userStatus} from "../podo/userData";
import {useEffect, useState} from "react";


function columns() {
    let cols = [
        'Name', 'Email', 'Phone', 'Status', 'Date Of Birth'
    ]
    // let _columns = []
    // cols.map((_col) => {
    //     _columns.push({
    //         title: _col, dataIndex: _col, key: _col
    //     })
    // })
    return [{
        title: 'id',dataIndex: 'id', key: 'id'
    },
        {
        title: 'Name', dataIndex: 'name'
    },
        {
            title: 'Email',dataIndex: 'email'
        },
        {
            title: 'Phone', dataIndex: 'phone'
        },
        {
            title: 'Date Of Birth', dataIndex: 'dob'
        },
        {
            title: 'Status', dataIndex: 'status',
            render: (status) => {
                let num = userStatus.findIndex((value) => value.name === status);
                return (<Tag color={userStatus.at(num).indicator}>{status}</Tag>)
            }
        }
    ];
}

export default function Clients() {
    const [clients,setClients] = useState([]);
    useEffect(() => {
        setClients(getClients());
        }, [])
    return (<div className={''}>
        <span className={'d-flex flex-row justify-content-between'}>
            <h1>Clients</h1>
            <span>
                <Button className={'me-2'} variant={'outline-primary'}>Filter</Button>
                <Button variant={'primary'}>Create Now</Button>
            </span>
        </span>
        <Table columns={columns()} dataSource={clients}/>
    </div>)
}