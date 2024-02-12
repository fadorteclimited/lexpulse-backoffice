import {Card, Col, Row, Statistic, Table, Typography} from "antd";
import React from "react";
import CountUp from 'react-countup';
import {getRandomInt} from "../podo/utils";
import {Line} from "@ant-design/charts";


const formatter = (value) => <CountUp end={value} separator=","/>;
const {Text} = Typography;

function HomeScreenStat({title, value, precision, percentage, positive = true}) {

    return (<Card>
        <Statistic title={title} value={value} formatter={formatter} precision={precision}
                   decimalSeparator={'.'} suffix={<Text type={(positive) ? 'success' : 'danger'}>{percentage}%</Text>}/>
    </Card>)
}

export default function HomeScreen() {
    const data = [{year: '1991', value: 3}, {year: '1992', value: 4}, {year: '1993', value: 3.5}, {
        year: '1994', value: 5
    }, {year: '1995', value: 4.9}, {year: '1996', value: 6}, {year: '1997', value: 7}, {
        year: '1998', value: 9
    }, {year: '1999', value: 13},];

    const props = {
        data, xField: 'year', yField: 'value',
    };
    return (<div className={'pt-3'}>
        <Row gutter={{
            xs: 8, sm: 16, md: 24, lg: 32,
        }}>
            <Col span={6}>
                <HomeScreenStat title={"Bank Balance (USD)"} value={getRandomInt(100000, 10000)} precision={10.00}
                                percentage={20}/>
            </Col>
            <Col span={6}>
                <HomeScreenStat title={"New Users (24H)"} value={20} percentage={1} positive={false}/>
            </Col>
            <Col span={6}>
                <HomeScreenStat title={'New Events (24H)'} value={5} percentage={getRandomInt(100)} positive={true}/>
            </Col>
            <Col span={6}>
                <HomeScreenStat title={'Payout (USD)'} value={getRandomInt(20000)} precision={2}
                                percentage={getRandomInt(100)} positive={false}/>

            </Col>
        </Row>
        <Row className={'mt-3'} gutter={{
            xs: 8, sm: 16, md: 24, lg: 32,
        }}>
            <Col span={16}>

                <Card className={'mt-3 overflow-hidden'}>
                    <h2>New Events</h2>
                    <Line className={'ar-chart'} {...props}/>
                </Card>
            </Col>
            <Col className={'h-100'} span={8}>
                <Card className={'h-100'}>
                    <div>
                        <h2>Open Issues</h2>
                        <Table/>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>)

}