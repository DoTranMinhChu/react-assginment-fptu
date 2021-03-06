import { Row, Col, Container } from 'reactstrap';

import { Router, Routes, Route } from 'react-router-dom';
import Detail from './DetailComponents';

const Main = ({ bathShower, bedding, lighting }) => {
    const firstBathShower = bathShower[0];
    const firstBedding = bedding[0];
    const firstLighting = lighting[0];

    return (

        <>
            <Container>
                <Row md="3" sm="1" >
                    <Col >
                        <Detail data={firstBathShower} />
                    </Col>
                    <Col >
                        <Detail data={firstBedding} />
                    </Col>
                    <Col >
                        <Detail data={firstLighting} />
                    </Col>

                </Row>
            </Container>


        </>

    );
}



export default Main;