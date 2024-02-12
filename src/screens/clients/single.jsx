import {Card, Col, Descriptions, Image, Row, Space, Tag} from "antd";
import {useState} from "react";
import {dateReader, getRandomInt} from "../../podo/utils";
import {faker} from "@faker-js/faker";
import DescriptionsItem from "antd/es/descriptions/Item";
import {userStatus} from "../../podo/userData";

export default function SingleClient() {
    const [profile,setProfile] = useState({
        id: getRandomInt(300),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        image: faker.image.urlLoremFlickr({category: ''}),
        companyName: faker.company.buzzNoun(),
        dateJoined: faker.date.past({years: 1}),
        cover: faker.image.urlLoremFlickr({category: 'colorful'}),
        email: faker.internet.email(),
        description: faker.lorem.sentences(5),
        ticketsBought: getRandomInt(20),
        followers: getRandomInt(300),
        eventsBooked: getRandomInt(20),
        verified: true,
    })

    return (<div className={'py-3'}>
        <Card>
            <Row gutter={[16,8]}>
               <Col span={6}><Image src={profile.image} width={'100%'} className={'ar-square rounded-3 px-2'} /></Col>
                <Col span={18}>
                    <Descriptions title={'Client information'} layout={'vertical'} colon={false} extra={<div></div>}>
                        <DescriptionsItem label={'Name'}>{profile.firstName} {profile.lastName}</DescriptionsItem>
                        <DescriptionsItem label={'Date Joined'}>{dateReader({date: profile.dateJoined})}</DescriptionsItem>
                        <DescriptionsItem label={'Email'}>{profile.email} <Tag color={(profile.verified)? 'success' : 'warning'}>Verified</Tag></DescriptionsItem>
                        <DescriptionsItem label={'Following'}>{profile.followers}</DescriptionsItem>
                        <DescriptionsItem label={'Events Booked'}>{profile.eventsBooked}</DescriptionsItem>
                        <DescriptionsItem label={'Tickets Bought'}>{profile.ticketsBought}</DescriptionsItem>
                    </Descriptions>
                </Col>
            </Row>
        </Card>
    </div>)
}