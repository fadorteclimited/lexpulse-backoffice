import {Table, Tag} from "antd";
import {dateReader, MiniUserModule} from "../../podo/utils";


export default function Reservations({eventId, currency}) {

    return <Table columns={[
        {
            title: 'User', key: 'User', dataIndex: 'attendeeId', render: (id) => <MiniUserModule id={id}/>
        }, {
            title: 'Tickets', key: 'Tickets', dataIndex: 'ticketInfo', render: (ticketInfo) => {
            let total= 0;
            ticketInfo.forEach((option) => {
                total+=option.numberOfTickets;
            });
            return total;
        }
        }, {
            title: 'Date',
            key: 'Date',
            dataIndex: 'createdAt',
            render: (date) => dateReader({date: date, weekDay: true})
        },
        {
            title: 'Status', key: 'Status', dataIndex: 'status', render: (status) => <Tag color={'success'}>{status}</Tag>
        },
        {
            title: 'Total', key: 'Total', dataIndex: 'totalPrice', render: (price) => currency + ' ' + price.toFixed(2)
        },
        {
            title: 'Payment Method', key: 'payment', dataIndex: 'paymentMethod'
        }
    ]}/>

}

