import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Badge, Button, Card, Col, Descriptions, Dropdown, Image, message, Row, Space, Table, Tabs, Tag} from "antd";
import {dateReader, getRandomInt} from "../../podo/utils";
import {faker} from "@faker-js/faker";
import {DownOutlined} from "@ant-design/icons";
import eventList from "../../podo/events.json";
import Poster from "../../components/poster";
import Reservations from "./reservations";


export default function SingleEvent() {
    let {id} = useParams();

    const [date, setDate] = useState(new Date(Date.now()));
    const [unSold, setUnsold] = useState(0);
    const [sold, setSold] = useState(0);
    const [details, setDetails] = useState({
        id: getRandomInt(300),
        eventName: faker.company.name(),
        eventDate: Date.now(),
        image: faker.image.url(),
        description: faker.lorem.sentences(5),
        category: 'Music Concert',
        location: 'Milan',
        country: 'Kenya',
        approved: true,
        currency: 'KES',
        ticketInfo: [{
            id: 0,
            ticketsLeft: getRandomInt(100),
            ticketsAvailable: getRandomInt(200, 100),
            ticketType:'VIP',
            price: getRandomInt(10000)

        }]
    });

    useEffect(() => {

        if (details !== undefined) {
            if (details !== null) {

                console.log(details)
                let _date = new Date(details.eventDate);
                setDate(_date);
                let count = 0;
                let count2 = 0;

                for (let index in details.ticketInfo) {
                    count += details.ticketInfo.at(index).ticketsLeft
                    count2 += details.ticketInfo.at(index).ticketsAvailable
                    setUnsold(count);
                    setSold(count2 - count)
                }

                // setSoldTickets(getSoldTickets(dets.ticketInfo, _date))
            }
        }

    }, [details]);


    let status;
    let variant;

    if (details.approved) {
        status = 'Selling';
        variant = 'success';
    } else {
        status = 'Reviewing';
        variant = 'info';
    }
    const dropDownOnClick = ({key}) => {
        message.info(`Click on item ${key}`);
    };
    const dropdownItems = [{
        key: 0, label: 'Approve Event'
    }, {
        key: 1, label: 'Change Details'
    },

        {
            key: 2, label: 'Add Tickets'
        }, {
            danger: true, key: 3, label: 'Delete Event'
        }, {
            danger: true, key: 4, label: 'Refund Tickets'
        }];
    const {eventName, eventDate, image, location, ticketInfo, country, category, description} = details
    return (<div className={'py-3'}>
        <Card><Row gutter={[16, 8]}>
            <Col span={6}><Image src={image} width={'100%'} className={'ar-square rounded-3 px-2'}/></Col>
            <Col span={18}>
                <Descriptions title={eventName} layout={'vertical'} colon={false}
                              extra={<Dropdown placement="bottom" menu={{
                                  items: dropdownItems, onClick: dropDownOnClick,
                              }} arrow={{
                                  pointAtCenter: true,
                              }}>
                                  <Button type={'link'}>
                                      <Space>
                                          Actions
                                          <DownOutlined/>
                                      </Space>
                                  </Button>
                              </Dropdown>}>
                    <Descriptions.Item label={'Status'}><Tag color={variant}>{status}</Tag></Descriptions.Item>
                    <Descriptions.Item label={'Date'}>{dateReader({date: date, weekDay: true})}</Descriptions.Item>
                    <Descriptions.Item label={'Category'}>{category}</Descriptions.Item>
                    <Descriptions.Item label={'Description'}>{description}</Descriptions.Item>
                    <Descriptions.Item label={'Location'}>{location}</Descriptions.Item>
                    <Descriptions.Item label={'Country'}>{country}</Descriptions.Item>
                </Descriptions>
            </Col>
        </Row></Card>
        <Tabs rootClassName={'mt-3'} type={'card'} items={[
            {
                key: 1,
                label: 'Tickets',
                children:  <Table dataSource={details.ticketInfo} columns={[
                    {
                        title: 'Name',
                        key: 'Name',
                        dataIndex: 'ticketType'
                    },
                    {
                        title: 'Price',
                        key: 'Price',
                        dataIndex: 'price',
                        render: (price) => details.currency + ' ' + price.toFixed(2)
                    },
                    {
                        title: 'Available', key: 'Available', dataIndex: 'ticketsAvailable'
                    },
                    {title: 'Tickets Left', key: 'left', dataIndex: 'ticketsLeft'},
                    {title: 'Actions', key: 'Actions', render: (_, record) => <Space>
                            <Button type={'primary'}>Edit</Button>
                            <Button type={'primary'} danger>Delete</Button>
                        </Space>}
                ]}/>,
            },
            {
                key: 2,
                label: 'Reservations',
                children: <Reservations currency={details.currency} eventId={details.id}/>
            },
            {
                key: 3,
                label: 'Transactions',
                children: 'Transactions'
            },
            {
                key: 4,
                label: 'Disputes',
                children: 'Disputes'
            }
        ]} />

    </div>)
}