import { InputGroup, Form } from "react-bootstrap";

function SourcesListSelect( props ){
  return (
    <>
      <InputGroup.Text>Source:</InputGroup.Text>
      <Form.Select>
        <option value= "" defaultChecked></option>
        <option value={1} > W3 Org Java Course </option>
        <option value={2} > JavaTcurses Interview Questions </option>
      </Form.Select>
    </>

  )
}
export default SourcesListSelect;