
import React from "react";
import { hot } from 'react-hot-loader/root';
import { Route } from "react-router-dom";
import { AppRouter } from "./components";
import { Login, Event } from './pages';

class App extends React.Component {
  render() {
    
    return (
      
      <>
        {/* <AppRouter/> */}
        <Route exact path="/" component={Event} />
        <Route exact path="/login" component={Login} />

      </>
      
    );
  }
}

export default hot(App);
