// import './App.scss';
import './assets/custom.scss'
import {BrowserRouter, Link, NavLink, Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
// import Header from "./components/header";
import React, {useEffect, useState} from "react";
import Support from "./screens/support";
import Hosts from "./screens/hosts";
import Clients from "./screens/clients";
import {ConfigProvider, Layout, Menu, theme} from "antd";
import {
    FileOutlined, MenuOutlined, PieChartOutlined, TeamOutlined, UserOutlined,
} from '@ant-design/icons';
import Logo from "./assets/logo.png";
import Breadcrumbs from "./components/breadcrumbs";
import SingleClient from "./screens/clients/single";
import SingleHost from "./screens/hosts/single";
import SingleEvent from "./screens/events/single";
import EventsScreen from "./screens/events";


const {Header, Footer, Sider, Content} = Layout;


const config = {
    token: {
        colorPrimary: "#584cf4",
        colorInfo: "#584cf4"
    },

};


function App() {

    return (<ConfigProvider theme={config}>
            <BrowserRouter className="App" basename={'/'}>
                <Routed/>
            </BrowserRouter>
        </ConfigProvider>

    );
}


function getItem(label, key, icon, children) {
    return {
        key, icon, children, label,
    };
}

const items = [
    getItem('Dashboard', '/', <PieChartOutlined/>),
    getItem('Events', '/events', <MenuOutlined/>, [
        getItem('Active', '/events/active'),
        getItem('Past', '/events/past'),
        getItem('Recent', '/events/recent'),
        ]),
    getItem('Clients', '/clients', <UserOutlined/>),
    getItem('Hosts' , '/hosts', <TeamOutlined/>),
    getItem('Support', '/support', <FileOutlined/>),];

function Routed() {

    return (
                        <Routes>
                            <Route element={<MainShell/>}>
                                <Route path={'/'} element={<HomeScreen/>}/>
                                <Route path={'/hosts'} element={<Hosts/>}/>
                                <Route path={'/hosts/:id'} element={<SingleHost/>}/>
                                <Route path={'/clients'} element={<Clients/>}/>
                                <Route path={'/clients/:id'} element={<SingleClient/>}/>
                                <Route path={'/support'} element={<Support/>}/>
                                <Route path={'/events/:id'} element={<SingleEvent/>}/>
                                <Route path={'events/active'} element={<EventsScreen type={'active'}/>}/>
                                <Route path={'events/past'} element={<EventsScreen type={'past'}/>}/>
                                <Route path={'events/recent'} element={<EventsScreen type={'recent'}/>}/>
                            </Route>
                        </Routes>);
}


function MainShell() {
    let location = useLocation();
    let history = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (<Layout
        style={{
            height: '100vh',
        }}
    >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className={`text-white d-flex flex-row ${(collapsed) ? 'justify-content-around' : ''}`}>
                <img src={Logo} alt={'logo'} height={'50'}/>
                <h1 className={`ff-montserrat text-uppercase bs-h5 fw-light ${(collapsed)? 'd-none' : ''}`}>Lexpulse</h1>
            </div>

            <Menu onClick={({key}) => history(key)} id="sidebar" theme="dark"
                  defaultSelectedKeys={location.pathname} mode="inline" items={items}/>
        </Sider>
        <Layout>
            <Header>
                <Breadcrumbs alt={true}/>
            </Header>
            <Content
                style={{
                    margin: '0 16px',
                }}>
                <div className={'fillSpace overflow-scroll'}>
                   <Outlet/>
                </div>
            </Content>
            <Footer>

            </Footer>
        </Layout>
    </Layout>)
}

export default App;
