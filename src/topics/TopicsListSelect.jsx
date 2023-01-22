import { Form, InputGroup } from "react-bootstrap"

function TopicsListSelect( props ){
  return(
    <>
      <InputGroup.Text>Topic:</InputGroup.Text>
      <Form.Select>
        <option value={1} > Java </option>
        <option value={2} > Git </option>
    </Form.Select>
    </>
  );
  
  
}

export default TopicsListSelect;