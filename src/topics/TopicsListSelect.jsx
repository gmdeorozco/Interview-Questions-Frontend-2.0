import { Form, InputGroup, Spinner } from "react-bootstrap"
import { useGetTopicNamesQuery } from "../api/apiSlice";

function TopicsListSelect( props ){

  const {
    data: topicNames,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTopicNamesQuery()

  let content;
  let message;

  if( isLoading ){
    message = <Spinner> Loading content...</Spinner>
  } else if( isError){
    message = <div> { error.toString() } </div>;
  } else if ( isSuccess ){
    message = '';
    content = (
      topicNames.map( topicName =>
        <option key={ topicName } value = { topicName }> { topicName } </option>
      )
     
    ) 
    
     
  }

  return(
    <>
      { message && <div> { message }</div>}
      <InputGroup.Text>Topic:</InputGroup.Text>
      <Form.Select>
        <option value= "" defaultChecked></option>;
      
       { content }
       </Form.Select>
    </>
  );
  
  
}

export default TopicsListSelect;