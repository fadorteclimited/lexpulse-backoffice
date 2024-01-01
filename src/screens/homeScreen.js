import {Card, Col, Row, Statistic, theme} from "antd";
import React from "react";
import CountUp from 'react-countup';

const formatter = (value) => <CountUp end={value} separator="," />;

function HomeScreenStat({title, value, precision}) {

    return (<Card color={theme.useToken().token.colorBgElevated}>
        <Statistic title={title} value={value} formatter={formatter} precision={precision} decimalSeparator={'.'}/>
    </Card>)
}
export default function HomeScreen() {
    return (<Row gutter={16}>
        <Col>
            <Statistic title="Active Users" value={112893} formatter={formatter} />
            <HomeScreenStat title={"Today's Earnings"} value={11.78} precision={10}/>
        </Col>
        <Col>
            <HomeScreenStat title={"New Users"} value={'45'}/>
        </Col>
        <Col>
            <HomeScreenStat title={'Complaints'} value={0}/>
        </Col>
        <Col>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
        </Col>
    </Row>)

}