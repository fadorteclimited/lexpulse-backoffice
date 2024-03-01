import {List} from "antd";
import Poster from "../../components/poster";
import eventList from '../../podo/events.json'



export default function EventsScreen({type}) {

    return (<div className={'py-3'}><List
        grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 4,
        }}
        dataSource={eventList}
        renderItem={(item) => (
            <List.Item>
                <Poster eventDetails={item}/>
            </List.Item>
        )}/></div> )
}