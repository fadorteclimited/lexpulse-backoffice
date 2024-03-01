
import {Link as LinkContainer} from "react-router-dom"
import {statuses} from "../podo/events";
import {Badge, Button, Card, theme, Typography} from "antd";
import {dateReader} from "../podo/utils";


export default function Poster({eventDetails}) {
    const {
        token: { colorPrimary},
    } = theme.useToken();
    return (<LinkContainer to={'/events/' + eventDetails.id}>
        <Card className={'h-100 border-0 rounded-4 bg-body shadow-none'} cover={<div className={'w-100 ar-square p-2'} style={{
            backgroundImage: `url("${eventDetails.poster}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className={'d-flex flex-row justify-content-end'}>
                <Badge color={colorPrimary} count={eventDetails.status} status={'success'}/>
            </div>
        </div> }>
            <Card.Meta title={<span className={'w-100 d-flex flex-row justify-content-between'}><>{eventDetails.name}</> <Typography.Text color={colorPrimary} className={'text-end'}>{dateReader({date: eventDetails.date})}</Typography.Text></span>} description={eventDetails.description}/>
            <Button type={'primary'} ghost className={' rounded-3 mt-2'}  onClick={() => console.log.bind(this,eventDetails)}>View Event</Button>

        </Card>
    </LinkContainer>);
}
