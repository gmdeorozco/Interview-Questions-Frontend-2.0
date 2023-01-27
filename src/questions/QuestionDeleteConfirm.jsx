import { Card, Container, ListGroup, Button, Row, Col, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useGetQuestionQuery } from "../api/questionsSlice";

function QuestionDeleteConfirm(){
  const { questionId } = useParams();
  const navigate = useNavigate();
  const { data: question, isFetching, isSuccess, isError, error } = useGetQuestionQuery( questionId );
  let content;

  if( isFetching ){
    content = <Spinner text="Loading..." />
  } else if ( isError ){
    content =  error.toString() 
  } else {
    console.log("defined content")
    content = (<>
      <Card.Header className="bg-light">  Comfirmation  </Card.Header>
        <Card.Body className="d-flex justify-content-center
          p-3
          ">
          <Container>

            <Row className="d-flex justify-content-center">
              <h3>Delete question id # { question.id }?</h3>
              
              <hr></hr>
              <ListGroup className="mb-3" >
                <ListGroup.Item >
                    Question id : { question.id }  
                </ListGroup.Item>

                <ListGroup.Item >
                <LinkContainer to="/topics"  > 
                  <Button className="btn btn-outline-light" >  
                    Topic : { question.topic }
                    </Button>
                </LinkContainer>
                </ListGroup.Item>

                  <ListGroup.Item >
                  <LinkContainer to="/sources"  > 
                      <Button className="btn btn-outline-light" >  
                        { question.source.name }
                      </Button>
                  </LinkContainer>
                  </ListGroup.Item>

                  <ListGroup.Item >
                    <LinkContainer to={`/questions/${ questionId }`}  > 
                      <Button className="btn btn-outline-light" >  
                      Question : { question.question }
                      </Button>
                    </LinkContainer>
                  </ListGroup.Item>
                  

              </ListGroup >
                
              </Row>
              <Row >
              <Col className="d-flex justify-content-center">
              
                  <Button className = "btn btn-success"
                    onClick={ () => navigate(-1) } 
                  > NO </Button>
                  <Button className = "btn btn-danger"> YES </Button>
                  
              </Col>
              </Row>
          </Container>
          </Card.Body>
          </>)
  }

  return (
    <Card className = "w-75 border border-white m-5 mb-2 p-0">
      { content }
    </Card>
    )
}
export default QuestionDeleteConfirm;