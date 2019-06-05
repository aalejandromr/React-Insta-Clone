import React from 'react';
import './App.css';

import withAthenticate from './components/authentication/Authentication';
import PostPage from './components/postContainer/PostPage';
import LoginPage from './components/Login/Login'


const ComponentFromWithAuthenticate = withAthenticate(PostPage)(LoginPage);
class App extends React.Component {
  
  render (){
    return (
      <ComponentFromWithAuthenticate/>
    );
  }
}

export default App;
