import {Menu} from "antd";
import {Link, NavLink} from "react-router-dom";
import {FileOutlined, MenuOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(<NavLink to={'/'}>Dashboard</NavLink> , '/', <PieChartOutlined/>),

    getItem(<Link className={'ant-menu-title-content'} to={'/events'}>Events</Link>, '/events', <MenuOutlined />, [
        getItem(<Link to={'/events/active'}>Active</Link>, '/events/active'),
        getItem(<Link to={'/events/past'}>Past</Link>, '/events/past'),
        getItem(<Link to={'/events/recent'}>Recent</Link>, '/events/recent'),
    ]),
    getItem(<Link exact to={'/clients'}>Clients</Link>, '/clients', <UserOutlined/>),
    getItem(<Link to={'/hosts'}>Hosts </Link>, '/hosts', <TeamOutlined/>),
    getItem(<Link className={'link-underline-opacity-0'} exact to={'/support'}>Support</Link>, '/support', <FileOutlined/>),
];

export default function Sidebar() {

    return(<Menu>

    </Menu>);
}