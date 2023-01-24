import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Header, NavBar } from './headers';
import { NewQuestionForm, QuestionDeleteConfirm, QuestionsTable, QuestionView } from './questions';
import { NewSourceForm, SourcesTable } from './sources';
import { NewTopicForm, TopicsTable } from './topics'
import 'bootswatch/dist/darkly/bootstrap.min.css';


function App() {

  console.log("printing App..")

  return (
          
      <Container className="shadow shadow-3">
        <Header />
        <NavBar />

      

        <Routes >

       
        <Route 
          exact path={"/questions"} 
          element={
            <React.Fragment>
              <Row className="d-flex justify-content-center">
                <NewQuestionForm />
              </Row>
              
              <Row className="d-flex justify-content-center">
                <QuestionsTable />
              </Row>
            </React.Fragment>
            }>
                  

            </Route>

          <Route
            path="/topics"
            element={
              <React.Fragment  >
                <Container >
                  <Row className="d-flex justify-content-center"><NewTopicForm /></Row> 
                  <Row className="d-flex justify-content-center"><TopicsTable /></Row> 
                </Container>
              </React.Fragment>
            }
          />
         
          <Route path="/sources" 
            element={
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
            }
          />
 
          
          
          <Route path="/questions/:id/delete"
            element={
              <React.Fragment>
                <Row className="d-flex justify-content-center">
                  <QuestionDeleteConfirm />
                </Row>
              </React.Fragment>
            } />

            <Route exact path="/questions/:id"
              element={
              <React.Fragment>
                <Row className="d-flex justify-content-center">
                  <QuestionView />
                </Row>
              </React.Fragment>
                    } />
          
          <Route
            path="*"
            element={<Navigate to="/questions" replace />}
          />
            
        
        </Routes>
      </Container>

  );
}

export default App;
