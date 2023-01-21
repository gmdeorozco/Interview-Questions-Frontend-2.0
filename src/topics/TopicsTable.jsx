import { Row, Table, Button, Pagination } from "react-bootstrap";
import { AiFillEdit, AiFillDelete, AiFillQuestionCircle } from "react-icons/ai"
import { FaBookReader } from "react-icons/fa"

function TopicTable(){
    return(
        <div className="bg-white 
            border border-black 
            border-2 m-5 mt-5 p-3 w-75 
            rounded rounded-3 shadow text-center">
                
            <h1> Topics Table</h1>
            
            <Pagination size="sm" className="justify-content-center " >
              <Pagination.Item active={false}> {"<<"} </Pagination.Item>
              <Pagination.Item active={false}> {"<"} </Pagination.Item>
              <Pagination.Item active={false}> {1} </Pagination.Item>
              <Pagination.Item active={true}> {2} </Pagination.Item>
              <Pagination.Item active={false}> {3} </Pagination.Item>
              <Pagination.Item active={false}> {">"} </Pagination.Item>
              <Pagination.Item active={false}> {">>"} </Pagination.Item>
            </Pagination>
            <div className="m-3"> 1 - 10 / 100 topics </div>

              <Table striped bordered hover size="sm" className="shadow shadow-2 border-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Topic</th> 
                    <th className = 'col-3'>Show</th>
                    <th className = 'col-3'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td> <h3 className ="d-flex justify-content-evenly"> < FaBookReader /> <AiFillQuestionCircle /></h3></td>
                    <td> <h3 className ="d-flex justify-content-evenly"> <AiFillEdit /> <AiFillDelete /></h3></td>
                    
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td> <h3 className ="d-flex justify-content-evenly"> < FaBookReader /> <AiFillQuestionCircle /></h3></td>
                    <td> <h3 className ="d-flex justify-content-evenly"> <AiFillEdit /> <AiFillDelete /></h3></td>
                    
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td> <h3 className ="d-flex justify-content-evenly"> < FaBookReader /> <AiFillQuestionCircle /></h3></td>
                    <td> <h3 className ="d-flex justify-content-evenly"> <AiFillEdit /> <AiFillDelete /></h3></td>

                  </tr>
                </tbody>
              </Table>

              <Pagination size="sm" className="justify-content-center" >
              <Pagination.Item active={false}> {"<<"} </Pagination.Item>
              <Pagination.Item active={false}> {"<"} </Pagination.Item>
              <Pagination.Item active={false}> {1} </Pagination.Item>
              <Pagination.Item active={true}> {2} </Pagination.Item>
              <Pagination.Item active={false}> {3} </Pagination.Item>
              <Pagination.Item active={false}> {">"} </Pagination.Item>
              <Pagination.Item active={false}> {">>"} </Pagination.Item>
            </Pagination>
            
        </div>
    );
}
export default TopicTable;