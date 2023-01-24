import { Button, Card, Col, Container, Row, ListGroup, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs"
import { MdModeEditOutline } from "react-icons/md"
import { LinkContainer } from "react-router-bootstrap";
import { AiFillDelete } from "react-icons/ai"
import { useGetQuestionQuery } from "../api/questionsSlice";


import React from "react";

export const QuestionView = ( { match }) => {
    
 
  const { questionId } = match.params;
  const { data: data, isFetching, isSuccess } = useGetQuestionQuery( questionId );

  let content
  if (isFetching) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
      let question = data._embedded.questionModelList;
    content = (
      
      <Row>
          <p className="bg-primary p-2 rounded rounded-2">{ question.question }</p>
          
          <hr></hr>
          <ListGroup className="mb-3">
            <ListGroup.Item>
              
                <p> Question id : { question.id } </p>
              
            </ListGroup.Item>

            <ListGroup.Item>
              <LinkContainer to="/topics"  > 
                <Button className="btn btn-outline-light" >  
                Topic : { question.topic } 
                </Button>
              </LinkContainer>
            </ListGroup.Item>

            <ListGroup.Item>
              <LinkContainer to="/sources"  > 
                <Button className="btn btn-outline-light" >  
                  Source : { question.source.name }
                </Button>
              </LinkContainer>
            </ListGroup.Item>

          </ListGroup>
        </Row>

    )
  }
  
  const navigate = useNavigate();


  return(
    
    <Card className = "w-75 border border-white m-5 mb-2 p-0">
      <Card.Header className="bg-light">  What is Java?  </Card.Header>
      <Card.Body className="d-flex justify-content-center
      p-3
      ">
      <Container>

        { content }
        <Row >
          <Col className="d-flex justify-content-end">
            
            <Button className = "btn btn-warning"
              onClick={ () => navigate(-1) } > 
            <BsBackspaceFill />  Back </Button>
            <Button className = "btn btn-warning"> <MdModeEditOutline />  Edit </Button>
            <LinkContainer to={`/questions/${questionId}/delete`} >
              <Button className = "btn btn-danger"> <AiFillDelete />  Delete </Button>
            </LinkContainer>
            
          </Col>
        </Row>
      </Container>
      </Card.Body>
      </Card>
    )
}
