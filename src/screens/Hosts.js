import {Button, Input, Space, Table, Tag} from "antd";
import {getClients, userStatus} from "../podo/userData";
import {useEffect, useRef, useState} from "react";
import {dateReader} from "../podo/utils";
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from 'react-highlight-words';




export default function Hosts() {
    const [clients,setClients] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    useEffect(() => {
        setClients(getClients(100));
    }, [])

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };


    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters, confirm) => {
        clearFilters();
        setSearchText('');
        confirm();
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters, confirm)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    function columns() {
        return [{
            title: 'Id',dataIndex: 'id', key: 'id',
            ...getColumnSearchProps('id')
        },
            {
                title: 'Name', dataIndex: 'name',

                sorter: (a, b) => a.name.length - b.name.length,
                sortDirections: ['descend', 'ascend'],
                ...getColumnSearchProps('name')
            },
            {
                title: 'Email',dataIndex: 'email',key: 'email',

                ...getColumnSearchProps('email')
            },
            {
                title: 'Phone', dataIndex: 'phone',key: 'phone',

                ...getColumnSearchProps('phone')
            },
            {
                title: 'Date Of Birth', dataIndex: 'dob',
                responsive: ['md'],
                render: dob => dateReader({date: dob})
            },
            {
                title: 'Status', dataIndex: 'status',
                render: (status) => {
                    let num = userStatus.findIndex((value) => value.name === status);
                    return (<Tag color={userStatus.at(num).indicator}>{status}</Tag>)
                },
                filters: userStatus.map((_status) => {
                    return {
                        text: _status.name,
                        value: _status.name,
                    }
                }),
                filteredValue: filteredInfo.status || null,
                onFilter: (value, record) => record.status.indexOf(value) === 0,
                sorter: (a, b) => a.status.length - b.status.length,
                sortDirections: ['descend', 'ascend'],
            }
        ];
    }
    return (<div className={''}>
        <span className={'d-flex flex-row justify-content-between'}>
            <h1>Hosts</h1>
            <Space>
                <Button type={'primary'} ghost>By Id</Button>
                <Button type={'primary'}>Create New</Button>
            </Space>
        </span>
        <Table columns={columns()} dataSource={clients}  pagination={{
            position: [ 'bottomRight'],
        }}/>
    </div>)
}