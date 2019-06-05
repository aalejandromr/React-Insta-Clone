import React from 'react';
import './App.css';

import withAthenticate from './components/authentication/Authentication';
import { PostPage } from './components/postContainer/PostPage';

const ComponentFromWithAuthenticate = withAthenticate(PostPage);

class App extends React.Component {

  render (){
    return (
      <ComponentFromWithAuthenticate/>
    );
  }
}

export default App;
