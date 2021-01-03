import React, {Fragment} from 'react';
import {HashRouter,Route,Switch } from 'react-router-dom';                                         
import Home from '../components/home';
import QuestionView from '../components/questionView'

const App = () => (
  <Fragment>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questionView" component={QuestionView} />  
      </Switch>
    </HashRouter>
  </Fragment>
);

export default App;