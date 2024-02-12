
import {Link as LinkContainer} from "react-router-dom"
import {statuses} from "../podo/events";
import {Badge, Button, Card} from "antd";
import {dateReader} from "../podo/utils";


export default function Poster({eventDetails}) {
    let variant;
    switch (eventDetails.status) {
        case statuses.at(0):
            variant = 'success';
            break;
        case statuses.at(1):
            variant = 'info';
            break;
        case  statuses.at(2):
            variant = 'warning';
            break;
        case statuses.at(3):
            variant = 'danger';
            break;
        default:
            variant = 'primary';
            break;
    }
    return (<LinkContainer to={'/events/' + eventDetails.id}>
        <Card className={'h-100 border-0 rounded-4 bg-body shadow-none'} cover={<img src={eventDetails.poster} className={'rounded-3'} alt={eventDetails.name}/> }>
            <Card.Meta title={<span>{eventDetails.name} <small className={'text-end'}>{dateReader({date: eventDetails.date})}</small></span>} description={eventDetails.description}/>
            <Button type={'primary'} ghost className={' rounded-3 mt-2'}  onClick={() => console.log.bind(this,eventDetails)}>View Event</Button>
            {/*<Card.Img variant={'top'} src={eventDetails.poster} className={'rounded-4 '} alt={eventDetails.name}/>*/}

            {/*<Card.Body className={'px-0'}>*/}
            {/*    <Card.Title>{eventDetails.name}</Card.Title>*/}
            {/*    <Card.Text className={'limitLines-2 mb-0'}>{eventDetails.description}</Card.Text>*/}
            {/*    <ListGroup variant={'flush px-0 mx-0 mb-1 shadow-none'}>*/}
            {/*        <ListGroup.Item className={'d-flex justify-content-between px-0'}>*/}
            {/*            Status: <Badge className={'rounded-pill py-2'} >{eventDetails.status}</Badge>*/}
            {/*        </ListGroup.Item>*/}
            {/*    </ListGroup>*/}
            {/*    <Button className={' rounded-3'}  onClick={() => console.log.bind(this,eventDetails)}>View Event</Button>*/}
            {/*</Card.Body>*/}
        </Card>
    </LinkContainer>);
}
