import { Form, Button, InputGroup, Card } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs"
import { useState } from "react";
import { TopicsListSelect } from "../topics";

function NewSourceForm(){
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

    return(
       

        <Card className = "w-75 bg-primary border border-white m-5 mb-2 p-0">
          <Card.Header className="bg-light">  New Source  </Card.Header>
          <Card.Body className="d-flex justify-content-center
         text-center p-3
          ">

         <Form >
                       
          <Form.Group className="mb-3" controlId="formBasicSource">
            <InputGroup className="mb-3">
              <InputGroup.Text>Source name:</InputGroup.Text>
              <Form.Control type="text" placeholder="Enter source name" />
              <TopicsListSelect />
            </InputGroup>

          </Form.Group>

               <Button variant="success" type="submit">
                   Add a New Source
               </Button>
               <Button variant="info"
                  onClick={() =>  setShow( false )}
                >
                Hide
              </Button>
              
           </Form>
           </Card.Body>
        </Card>
    
       ) 
}
export default NewSourceForm;