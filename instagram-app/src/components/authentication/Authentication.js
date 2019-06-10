import React from 'react';

const withAuthenticate = App => LoginPage => 
  class extends React.Component {
    constructor(){
      super();
      this.state = {
        loggedIn: false
      }
    }

    handleUpdate = () => {
      this.setState({
        loggedIn: true
      })
    }

    componentDidMount(){
      // localStorage.getItem("isLoggedIn") ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
      this.setState(() => 
        {
          if(localStorage.getItem("isLoggedIn"))
          {
            return {
              loggedIn: true
            }
          }
          return {
            loggedIn: false
          }
        }
      )
    }
    render() {
      return ( this.state.loggedIn ? <App/> : <LoginPage handleLoginUpdate={this.handleUpdate}/>);
    }
  }

export default withAuthenticate;