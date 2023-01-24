import { Button, Card, Col, Container, Row, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs"
import { MdModeEditOutline } from "react-icons/md"
import { LinkContainer } from "react-router-bootstrap";
import { AiFillDelete } from "react-icons/ai"

import React from "react";

function QuestionView(){
    
  let { id } = useParams();
  const navigate = useNavigate();


  return(
    
    <Card className = "w-75 border border-white m-5 mb-2 p-0">
      <Card.Header className="bg-light">  What is Java?  </Card.Header>
      <Card.Body className="d-flex justify-content-center
      p-3
      ">
      <Container>

        <Row>
          <p className="bg-primary p-2 rounded rounded-2">Java is a general purpose language.</p>
          
          <hr></hr>
          <ListGroup className="mb-3">
            <ListGroup.Item>
              
                <p> Question id : { id } </p>
              
            </ListGroup.Item>

            <ListGroup.Item>
              <LinkContainer to="/topics"  > 
                <Button className="btn btn-outline-light" >  
                Topic : Java 
                </Button>
              </LinkContainer>
            </ListGroup.Item>

            <ListGroup.Item>
              <LinkContainer to="/sources"  > 
                <Button className="btn btn-outline-light" >  
                  Source : W3.org Java Tutorial 
                </Button>
              </LinkContainer>
            </ListGroup.Item>

          </ListGroup>
        </Row>
        <Row >
          <Col className="d-flex justify-content-end">
            
            <Button className = "btn btn-warning"
              onClick={ () => navigate(-1) } > 
            <BsBackspaceFill />  Back </Button>
            <Button className = "btn btn-warning"> <MdModeEditOutline />  Edit </Button>
            <LinkContainer to={`/questions/${id}/delete`} >
              <Button className = "btn btn-danger"> <AiFillDelete />  Delete </Button>
            </LinkContainer>
            
          </Col>
        </Row>
      </Container>
      </Card.Body>
      </Card>
    )
}
export default QuestionView;