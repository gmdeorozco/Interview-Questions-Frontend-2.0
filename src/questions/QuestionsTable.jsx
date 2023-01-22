import { Row, Table, Pagination, Container, Card, Form, InputGroup} from "react-bootstrap";
import { AiFillEdit, AiFillDelete, AiOutlineLink } from "react-icons/ai"
import { SiTarget } from "react-icons/si"
import { TopicsListSelect } from "../topics";

function QuestionsTable(){
    return(
      <Card className = "w-75 bg-primary border border-white m-5 mb-2 p-0">

        <Card.Header className="bg-light"> Questions Table  </Card.Header>
        <Card.Body className="d-flex justify-content-center 
     text-center p-5
      ">
        <Container >
            
        <Row className="text-center"><h2>Questions Table</h2> </Row>
        <Row>
        <Pagination size="sm" className=" justify-content-center " >
          <Pagination.Item active={false}> {"<<"} </Pagination.Item>
          <Pagination.Item active={false}> {"<"} </Pagination.Item>
          <Pagination.Item active={false}> {1} </Pagination.Item>
          <Pagination.Item active={true}> {2} </Pagination.Item>
          <Pagination.Item active={false}> {3} </Pagination.Item>
          <Pagination.Item active={false}> {">"} </Pagination.Item>
          <Pagination.Item active={false}> {">>"} </Pagination.Item>
        </Pagination>
        </Row>

        <Row className="text-center w-100 ">
          <Form>            
            <Form.Group className="mb-3 " controlId="formBasicTopic">
              <InputGroup >
                
                  <InputGroup.Text> Search: </InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter search words" />
                  <TopicsListSelect />
                
              </InputGroup>
            </Form.Group>
          </Form>
        </Row>

        <Row className="justify-content-center"> 
          <Table  striped bordered hover 
            size="sm" className="table-danger w-100">
            <thead>
              <tr>
                <th>#</th>
                <th>Topic</th> 
                <th>Source</th> 
                <th>Link</th> 
                <th className = 'col-3'>Show</th>
                <th className = 'col-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Java</td>
                <td>W3.org Java Tutorial</td>
                <td > <h3><a href="https://www.w3org.com/java"><AiOutlineLink /></a></h3></td>
                <td> <h3 className ="d-flex justify-content-evenly">< SiTarget /> </h3></td>
                <td> <h3 className ="d-flex justify-content-evenly"> <AiFillEdit /> <AiFillDelete /></h3></td>
                
              </tr>
              <tr>
                <td>2</td>
              <td>Java</td>
                <td> W3 org Java Tutorial </td>
                <td> <h3><a href="https://www.w3org.com/java"><AiOutlineLink /></a></h3></td>
                <td> <h3 className ="d-flex justify-content-evenly"> < SiTarget /> </h3></td>
                <td> <h3 className ="d-flex justify-content-evenly"> <AiFillEdit /> <AiFillDelete /></h3></td>
                
              </tr>
              <tr>
                <td>3</td>
              <td>Java</td>
                <td>W3.org Java Tutorial</td>
                <td> <h3><a href="https://www.w3org.com/java"><AiOutlineLink /></a></h3></td>
                <td> <h3 className ="d-flex justify-content-evenly"> < SiTarget /> </h3></td>
                <td> <h3 className ="d-flex justify-content-evenly"> <AiFillEdit /> <AiFillDelete /></h3></td>

              </tr>
            </tbody>
             
              </Table> 
            </Row>

              <Pagination size="sm" className="justify-content-center" >
                <Pagination.Item active={false}> {"<<"} </Pagination.Item>
                <Pagination.Item active={false}> {"<"} </Pagination.Item>
                <Pagination.Item active={false}> {1} </Pagination.Item>
                <Pagination.Item active={true}> {2} </Pagination.Item>
                <Pagination.Item active={false}> {3} </Pagination.Item>
                <Pagination.Item active={false}> {">"} </Pagination.Item>
                <Pagination.Item active={false}> {">>"} </Pagination.Item>
              </Pagination>

            <Row className="m-3 justify-content-center"> 1 - 3 / 100 sources </Row>
            
        </Container>
        </ Card.Body>
        </Card>

    )

}

export default QuestionsTable;