import { Card, Container, ListGroup, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";




function QuestionDeleteConfirm(){
  let { id } = useParams();



  return (
    <Card className = "w-75 border border-white m-5 mb-2 p-0">
      <Card.Header className="bg-light">  Comfirmation  </Card.Header>
        <Card.Body className="d-flex justify-content-center
          p-3
          ">
          <Container>

            <Row className="d-flex justify-content-center">
              <h3>Are you sure you want to delete question id { id }?</h3>
              
              <hr></hr>
              <ListGroup className="mb-3" >
                <ListGroup.Item >
                    Question id : { id } 
                </ListGroup.Item>

                <ListGroup.Item >
                <LinkContainer to="/topics"  > 
                  <Button className="btn btn-outline-light" >  
                    Topic : Java 
                    </Button>
                </LinkContainer>
                </ListGroup.Item>

                  <ListGroup.Item >
                  <LinkContainer to="/sources"  > 
                      <Button className="btn btn-outline-light" >  
                      Source : W3.org Java Tutorial 
                      </Button>
                  </LinkContainer>
                  </ListGroup.Item>

                  <ListGroup.Item >
                    <LinkContainer to={`/questions/${id}`}  > 
                      <Button className="btn btn-outline-light" >  
                      Question : What is Java?
                      </Button>
                    </LinkContainer>
                  </ListGroup.Item>
                  

              </ListGroup >
                
              </Row>
              <Row >
              <Col className="d-flex justify-content-center">
              
                  <Button className = "btn btn-success"
                    //onClick={goBack} 
                  > NO </Button>
                  <Button className = "btn btn-danger"> YES </Button>
                  
              </Col>
              </Row>
          </Container>
          </Card.Body>
    </Card>
    )
}
export default QuestionDeleteConfirm;