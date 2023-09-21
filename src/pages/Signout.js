import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useNavigate } from "react-router-dom";

export function Signout() {
    const nav = useNavigate()

   // useEffect (() => {
   //     props.handler()
    //    nav("/")
   // })
   useEffect(() => {
    propTypes.handler()
   })
    return(
        <Container>
            <Row>
                <Col>
                Signout
                </Col>
            </Row>
        </Container>

    )
}