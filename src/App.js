import React from 'react';
import { Router,Route,Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Container, Row } from 'react-bootstrap';

import { Header, NavBar } from './headers';
import { NewQuestionForm, QuestionsTable } from './questions';
import { NewSourceForm, SourcesTable } from './sources';
import { NewTopicForm, TopicsTable } from './topics'

import 'bootswatch/dist/darkly/bootstrap.min.css';


function App() {

  const newHistory = createBrowserHistory();

  return (
    <Router history={newHistory} >
      <Container className="shadow shadow-3">
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
                <Container >
                  <Row className="d-flex justify-content-center">
                    <NewSourceForm />
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <SourcesTable />
                  </Row>
                </Container>
              </React.Fragment>
            )}
          />
           
          <Route exact path="/questions" 
            render={() => (
              <React.Fragment>
              <Row className="d-flex justify-content-center">
                <NewQuestionForm />
              </Row>
              <Row className="d-flex justify-content-center">
                <QuestionsTable />
              </Row>
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
