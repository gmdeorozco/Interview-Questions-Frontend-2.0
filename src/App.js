import { Router,Route,Switch, Redirect } from 'react-router-dom'
import NewTopicForm from './topics/NewTopicForm';
import NavBar from './NavBar'
import React from 'react';
import TopicsTable from './topics/TopicsTable';
import { createBrowserHistory } from 'history'
import NewSourceForm from './sources/NewSourceForm';
import SourcesTable from './sources/SourcesTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import NewQuestionForm from './questions/NewQuestionForm'
import QuestionsTable from './questions/QuestionsTable'
import { Col, Container, Row } from 'react-bootstrap';
import './css/blue.css'

function App() {

  const newHistory = createBrowserHistory();

  return (
    
    <Router history={newHistory} >
      
      <Container className="vh-100 content-main shadow shadow-3"   >
          <Header />
          <NavBar />

 
        <Switch >
       
          <Route
            exact
            path="/topics"
            render={() => (
              <React.Fragment  >
                <Container >
                  <Row className="d-flex justify-content-center"><NewTopicForm /></Row> 
                  <Row className="d-flex justify-content-center"><TopicsTable /></Row> 
                </Container>
              </React.Fragment>
            )}
          />
         
          <Route exact path="/sources" 
            render={() => (
              <React.Fragment>
                <NewSourceForm />
                <SourcesTable />
                
              </React.Fragment>
            )}
            />
           
          <Route exact path="/questions" 
            render={() => (
              <React.Fragment>
                <NewQuestionForm />
                <QuestionsTable />
                
              </React.Fragment>
            )}
            />
            
          <Redirect to="/topics" />
        </Switch>
        
       
      </Container>
    </Router>
  );
}

export default App;
