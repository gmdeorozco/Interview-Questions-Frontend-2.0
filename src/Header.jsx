import { Col, Container, Row } from "react-bootstrap";
import './css/blue.css'

function Header(){
    return(
        <Row className="text-white text-center header-bg fs-1">
            <Row>
                <Col>
                    <div className="p-3"> Interview Questions </div>
                </Col>
            </Row>
            
        </Row>
    )
}
export default Header;