import { Container, Row } from "react-bootstrap";
import { NewTopicForm, TopicsTable } from "./";


function Topics(){
  return(
    <Container >

      <Row className="d-flex justify-content-center">
        <NewTopicForm />
      </Row> 
      
      <Row className="d-flex justify-content-center">
        <TopicsTable />
      </Row> 

    </Container>
    )
}
export default Topics;