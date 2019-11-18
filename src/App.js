import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NotesPage from './pages/NotesPage'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/notes">
            <NotesPage></NotesPage>
          </Route>
          <Route path="/notes/:id">
            <NotesPage></NotesPage>
          </Route>
          <Route path="/">
            <NotesPage></NotesPage>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
