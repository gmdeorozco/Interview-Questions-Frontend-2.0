import { Form, InputGroup, Row, Table, Pagination, Container, Card } from "react-bootstrap";
import { AiFillEdit, AiFillDelete, AiFillQuestionCircle } from "react-icons/ai"
import { FaBookReader } from "react-icons/fa"

function TopicTable(){
    return(
      <Card className = "w-75 bg-primary border border-white m-5 mb-2 p-0">

        <Card.Header className="bg-light"> Topics Table  </Card.Header>
          <Card.Body className="d-flex justify-content-center text-center p-5">
            <Container >      
              <Row className="text-center"><h2>Topics Table</h2> </Row>

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
                      <th>Show</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="align-middle">
                      <td>1</td>
                      <td>Mark</td>

                      <td  > 
                        <div className="d-flex justify-content-around">
                          <h3> <FaBookReader /> </h3>
                          <h3> <AiFillQuestionCircle /> </h3>
                        </div>
                      </td>

                      <td>
                        <div className="d-flex justify-content-around">
                          <h3> <AiFillEdit /> </h3>
                          <h3> <AiFillDelete /> </h3>
                        </div>
                      </td>
                  
                    </tr>
                  </tbody>
             
                </Table> 
              </Row>

              <Row>
                <Pagination size="sm" className="justify-content-center" >
                  <Pagination.Item active={false}> {"<<"} </Pagination.Item>
                  <Pagination.Item active={false}> {"<"} </Pagination.Item>
                  <Pagination.Item active={false}> {1} </Pagination.Item>
                  <Pagination.Item active={true}> {2} </Pagination.Item>
                  <Pagination.Item active={false}> {3} </Pagination.Item>
                  <Pagination.Item active={false}> {">"} </Pagination.Item>
                  <Pagination.Item active={false}> {">>"} </Pagination.Item>
                </Pagination>
              </Row>
              <Row className="m-3 justify-content-center"> 1 - 3 / 100 topics </Row>
            
            </Container>
        </ Card.Body>
      </Card>
    );
}
export default TopicTable;