import {Button, Card, Col, Descriptions, Divider, Dropdown, Image, message, Row, Space, Tabs, Tag} from "antd";
import {useState} from "react";
import {dateReader, getRandomInt} from "../../podo/utils";
import {faker} from "@faker-js/faker";
import DescriptionsItem from "antd/es/descriptions/Item";
import eventList from '../../podo/events.json'
import Poster from "../../components/poster";
import {DownOutlined, EllipsisOutlined} from "@ant-design/icons";

export default function SingleHost() {
    const [profile,setProfile] = useState({
        id: getRandomInt(300),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        image: faker.image.urlLoremFlickr({category: 'art'}),
        companyName: faker.company.buzzNoun(),
        dateJoined: faker.date.past({years: 1}),
        cover: faker.image.urlLoremFlickr({category: 'colorful'}),
        email: faker.internet.email(),
        description: faker.lorem.sentences(5),
        ticketsBought: getRandomInt(20),
        followers: getRandomInt(300),
        eventsBooked: getRandomInt(20),
        verified: false,
    })
    const dropDownOnClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };
    const dropdownItems =   [
            {
                key: 1,
                label: 'Change Details'
            },
            {
                key: 2,
                label: 'verify Email'
            },
            {
                danger: true,
                key: 3,
                label: 'Block User'
            },
            {
                danger: true,
                key: 4,
                label: 'Delete User'
            }
        ];

    return (<div className={'py-3'}>
        <Card>
            <Row gutter={[16,8]}>
                <Col span={6} ><Image src={profile.image} width={'100%'} className={'ar-square rounded-3 px-2'}/></Col>
                <Col span={18} >
                    <Descriptions title={'Client information'} layout={'vertical'} colon={false} extra={<Dropdown placement="bottom" menu={{
                        items: dropdownItems,
                        onClick: dropDownOnClick,
                    }} arrow={{
                        pointAtCenter: true,
                    }}>
                        <Button type={'link'}>
                            <Space>
                                Actions
                                <DownOutlined />
                            </Space>
                        </Button>
                        </Dropdown>}>
                        <DescriptionsItem label={'Name'}>{profile.firstName} {profile.lastName}</DescriptionsItem>
                        <DescriptionsItem label={'Company Name'}>{profile.companyName}</DescriptionsItem>
                        <DescriptionsItem label={'Email'}>{profile.email} <Tag className={'ms-2 '} color={(profile.verified)? 'success' : 'warning'}>{(profile.verified)? 'Verified' : 'Unverified'}</Tag></DescriptionsItem>
                        <DescriptionsItem label={'Date Joined'}>{dateReader({date: profile.dateJoined})}</DescriptionsItem>
                        <DescriptionsItem label={'Followers'}>{profile.followers}</DescriptionsItem>
                        <DescriptionsItem label={'Events Hosted'}>{profile.eventsBooked}</DescriptionsItem>
                        <DescriptionsItem label={'Tickets Sold'}>{profile.ticketsBought}</DescriptionsItem>
                        <DescriptionsItem label={'About'}>{profile.description}</DescriptionsItem>
                    </Descriptions>
                </Col>
            </Row>
        </Card>
        <Tabs rootClassName={'mt-3'} type={'card'} items={[
            {
                key: 1,
                label: 'Events',
                children:  <Row gutter={[8, 16]}>
                    {eventList.map((details, index) => (<Col span={6} key={index}><Poster eventDetails={details}/></Col> ))}
                </Row>,
            },
            {
                key: 2,
                label: 'Transactions',
                children: 'Transactions'
            },
            {
                key: 3,
                label: 'Disputes',
                children: 'Disputes'
            }
        ]} />

    </div>)
}