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
      
      <Container  >
            <Header />
      <NavBar />
      <div>
        <Switch className="content-main vh-75">
          <Route
            exact
            path="/topics"
            render={() => (
              <React.Fragment>
                <NewTopicForm />
                <TopicsTable />
                
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
        </div>
      </Container>
    </Router>
  );
}

export default App;
