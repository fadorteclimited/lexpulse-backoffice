
import {useLocation, Link as LinkContainer} from "react-router-dom";
import {IoEllipse, IoHomeOutline} from "react-icons/io5";
import {Breadcrumb} from "antd";


export default function Breadcrumbs({alt = false}) {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);
    if (alt){
        return (<div className={'fst-italic fw-light text-capitalize text-white bs-h4 text-opacity-50'}>{pathNames.at(pathNames.length - 1)}</div>);
    } else {
        return (
            <Breadcrumb>
                {location.pathname === "/" ? null :
                    <LinkContainer to="/"><Breadcrumb.Item><IoHomeOutline size={20}/></Breadcrumb.Item></LinkContainer>}
                {pathNames.map((value, index) => {
                    const last = index === pathNames.length - 1;
                    const to = `/${pathNames.slice(0, index + 1).join("/")}`;
                    if (last) {
                        return (
                            <Breadcrumb.Item active key={to}>{value}</Breadcrumb.Item>
                        )
                    } else {
                        return (
                            <LinkContainer key={index}
                                           to={to}><Breadcrumb.Item>{value}</Breadcrumb.Item></LinkContainer>

                        )
                    }

                })}
            </Breadcrumb>
        );
    }
};