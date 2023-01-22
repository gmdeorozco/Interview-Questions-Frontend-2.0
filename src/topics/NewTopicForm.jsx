import { Form, Button, InputGroup, Card } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs"
import { useState } from "react";

function NewTopicForm(){

  const [ show, setShow ] = useState( false );

    if ( !show ){
      return(
        <div className="d-flex justify-content-start">
          <Button className = "mt-4 btn-outline-dark bg-success col-1"
            onClick={() => setShow( true ) } > 
            <BsPlusLg />
          </Button>
        </div>
      );
      
    }

    return(<>

        
        
        <Card className = "w-75 bg-primary border border-white m-5 mb-2 p-0">
          <Card.Header className="bg-light">  New Topic  </Card.Header>
          <Card.Body className="d-flex justify-content-center
         text-center p-3
          ">
      

          <Form >            
            <Form.Group className="mb-3" controlId="formBasicTopic">
              <InputGroup>
                <InputGroup.Text> Topic name: </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter topic name" />
              </InputGroup>
            </Form.Group>

            <Button variant="success">
              Add a New Topic
            </Button>
            <Button variant="info"
              onClick={() =>  setShow( false )}
            >
              Hide
            </Button>
              
          </Form>
     
          </Card.Body>
        </Card>
        
         
            
         </>
        
    );
}
export default NewTopicForm;