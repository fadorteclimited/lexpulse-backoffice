import {Card, Col, Row, Space, Table} from "antd";


export default function Support() {

    return (
        <div className={'py-3'}>
            <Space>
                <Card bordered>
                        <h3>Common Tickets</h3>
                        <Table>

                        </Table>
                </Card>
                <Card bordered>
                    <h3>Common Tickets</h3>
                    <Table>

                    </Table>
                </Card>
            </Space>
<Row className={'gy-3 gx-3'}>
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