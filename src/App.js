// import './App.scss';
import './assets/custom.scss'
import {BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
// import Header from "./components/header";

import React, {useEffect, useState} from "react";
import Support from "./screens/support";
import Hosts from "./screens/Hosts";
import Clients from "./screens/clients";
import {ConfigProvider, Breadcrumb, Layout, Menu, theme} from "antd";
import {
    DesktopOutlined, FileOutlined, MenuOutlined, PieChartOutlined, TeamOutlined, UserOutlined,
} from '@ant-design/icons';
import Logo from "./assets/logo.png";
import Breadcrumbs from "./components/breadcrumbs";


const {Header, Footer, Sider, Content} = Layout;


const config = {
    token: {
        colorPrimary: '#584cf4',
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

// function Routed() {
//     let location = useLocation();
//
//     const [hide, setHide] = useState(false);
//     useEffect(() => {
//         if (location.pathname === '/login' || location.pathname === '/confirm' || location.pathname === '/forgotpassword' || location.pathname === '/logout') {
//             setHide(true);
//
//         } else {
//
//             setHide(false);
//
//         }
//     }, [location.pathname])
//
//     return (
//         <div className={'h-100'}>
//             <Routes>
//                 <Route path={'/login'} element={<Login/>}/>
//             </Routes>
//             <Container fluid className={' h-100'}>
//                 <Row>
//                     <Col  lg={'2'} className={'p-0 m-0 desktopOnly'}>
//                         {!hide && <Sidebar/>}
//                     </Col>
//                     <Col md={'auto'} lg={'10'} className={'p-0 m-0 '}  >
//                         <Container fluid className={'p-0 bg-body-secondary h-100 d-flex flex-column'} style={{
//                             height: '100vh'
//                         }}>
//                             {!hide && <Header/>}
//                             <div className={'fillSpace'}>
//                                 <Routes>
//                                     <Route  path={'/'} element={<HomeScreen/>}/>
//                                     <Route path={'/hosts'} element={<Hosts/>}/>
//                                     <Route path={'/clients'} element={<Clients/>}/>
//                                     <Route path={'/support'} element={<Support/>}/>
//                                 </Routes>
//                             </div>
//                         </Container>
//                     </Col>
//                 </Row>
//             </Container>
//
//         </div>
//   );
// }


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
    let location = useLocation();
    let history = useNavigate();
    const [hide, setHide] = useState(false);
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/confirm' || location.pathname === '/forgotpassword' || location.pathname === '/logout') {
            setHide(true);

        } else {

            setHide(false);

        }
    }, [location.pathname])
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
                <div className={'ff-montserrat text-white'}><img src={Logo} alt={'logo'} height={'80'}/>Lexpulse
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
                    <div className={'fillSpace'}>
                        <Routes>
                            <Route path={'/'} element={<HomeScreen/>}/>
                            <Route path={'/hosts'} element={<Hosts/>}/>
                            <Route path={'/clients'} element={<Clients/>}/>
                            <Route path={'/support'} element={<Support/>}/>
                        </Routes>
                    </div>
                </Content>
                <Footer>

                </Footer>
            </Layout>
        </Layout>);
}

export default App;
