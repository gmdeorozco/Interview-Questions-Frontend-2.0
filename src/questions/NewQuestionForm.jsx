import { Form, Button, InputGroup, FloatingLabel, Card } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs"
import { useState } from "react";
import { TopicsListSelect } from "../topics";
import { SourcesListSelect } from "../sources";

function NewQuestionForm(){
  
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
      <Card.Header className="bg-light">  New Quetion  </Card.Header>
      <Card.Body className="d-flex justify-content-center
     text-center p-3
      ">

         <Form >
                       
               <Form.Group className="mb-3" controlId="formBasicQuestion">

                  <InputGroup className="mb-3">
                    <TopicsListSelect />  
                    <SourcesListSelect />
                  </InputGroup>
                  <InputGroup className="mb-3">
                  <InputGroup.Text>Question:</InputGroup.Text>
                    <Form.Control type="text" placeholder="Enter question" />
                  </InputGroup>

                  <FloatingLabel controlId="floatingTextarea2" label="Answer">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Answer:</InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave an answer here"
                        style={{ height: '100px' }}
                      />
                  </InputGroup>
                    </FloatingLabel>

               </Form.Group>

               <Button variant="success" type="submit">
                   Add a New Question
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
export default NewQuestionForm;