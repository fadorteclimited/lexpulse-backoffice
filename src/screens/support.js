import {Col, Row, Table} from "antd";


export default function Support() {

    return (
        <div className={'py-3'}>
<Row className={'gy-3 gx-3'} xs={'2'}>
    <Col>
        <div className={'bg-body-tertiary rounded-3 p-3'}>
            <h5>Common Tickets</h5>
            <Table>

            </Table>
        </div>
    </Col>
    <Col>
        <div className={'bg-body-tertiary rounded-3 p-3'}>
            <h5>Open Tickets</h5>
            <Table>

            </Table>
        </div>
    </Col>
    <Col>
        <div className={'bg-body-tertiary rounded-3 p-3'}>
            <h5>Seller Tickets</h5>
            <Table>

            </Table>
        </div>
    </Col>
    <Col>
        <div className={'bg-body-tertiary rounded-3 p-3'}>
            <h5>Client Tickets</h5>
            <Table>

            </Table>
        </div>
    </Col>
</Row>
        </div>
    )
}