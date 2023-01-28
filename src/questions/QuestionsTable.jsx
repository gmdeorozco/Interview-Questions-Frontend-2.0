import { Row, Table, Pagination, Container, Card, Form, InputGroup, Spinner } from "react-bootstrap";
import { AiFillEdit, AiFillDelete, AiOutlineLink } from "react-icons/ai"
import { SiTarget } from "react-icons/si"
import { TopicsListSelect } from "../topics";
import { SourcesListSelect } from "../sources"
import { useGetQuestionsQuery } from "../api/apiSlice";
import { Link } from "react-router-dom";

  let PostExcerpt = ({ question }) => {

    return (
     
      <tr>
        <td>{ question.id }</td>
        <td><small>{ question.topic } / <a href={ question.source.sourceLink }>{ question.source.name }</a></small></td>
        <td className="lead"> <b>{ question.question }</b></td>
        <td> <h4 className ="d-flex justify-content-evenly"> <Link to={ `/questions/${question.id}` }> < SiTarget /> </Link></h4></td>
        <td> 
          <h4 className ="d-flex justify-content-evenly"> 
            <AiFillEdit />  
            <Link to={`/questions/${question.id}/delete`}>
              <AiFillDelete />
            </Link>
          </h4>
        </td>
        
      </tr>
   
    )
    }

    export const QuestionsTable = () => {
      const {
        data: questions,
        isLoading,
        isSuccess,
        isError,
        error
      } = useGetQuestionsQuery()
    
      let content
    
      if (isLoading) {
        content = <tr><td><Spinner text="Loading..." /></td></tr>
      } else if (isSuccess) {

        content = questions._embedded.questionModelList
          .map(question => <PostExcerpt key={question.id} question={question} />)

      } else if (isError) {
        content = <tr><td>{error.toString()}</td></tr>
      }


  
    return(
      <Card className = "w-100 bg-primary border border-white m-5 mb-2 p-0">

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
              <InputGroup className="mb-3">
                  <TopicsListSelect />
                  <SourcesListSelect />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text> Search: </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter search words" />
              </InputGroup>
            </Form.Group>
          </Form>
        </Row>

        <Row className="justify-content-center"> 
          <Table  striped bordered hover 
            size="sm" className="table-dark w-100">
            <thead>
              <tr>
                <th>#</th>
                <th>Topic / Source </th> 
                <th className="col-6">Question:</th>
                <th >Show</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              { content }
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