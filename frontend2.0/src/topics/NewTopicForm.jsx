import { Form, Button, Row } from "react-bootstrap";

function NewTopicForm(){
    return(
        
         
            <Form className="bg-white text-center
                    border border-white 
                    border-2 m-5 
                    p-3 w-75 rounded rounded-3 shadow">
                        
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="text" placeholder="Enter topic name" />
                    <Form.Text className="text-muted">
                     Use one or two words to describe it.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add a New Topic
                </Button>
            </Form>
            
        
    );
}
export default NewTopicForm;