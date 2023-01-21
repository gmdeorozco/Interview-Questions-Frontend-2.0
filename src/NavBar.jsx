import { Button, Row, ButtonGroup }  from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './css/blue.css'

function NavBar(){
  return(
    <Row>
      <ButtonGroup className="btn-group btn-group-lg ps-0 pe-0" role="group" aria-label="...">

        <LinkContainer to="/topics"  >
          <Button className="col-4" > Topics </Button>
        </LinkContainer>

        <LinkContainer to="/sources"  >
          <Button className=" col-4">  Sources </Button>
        </LinkContainer>

        <LinkContainer to="/questions" >
          <Button className=" col-4">  Interview Questions </Button>
        </LinkContainer>

      </ButtonGroup>

    </Row>
    
  )
}
export default NavBar;