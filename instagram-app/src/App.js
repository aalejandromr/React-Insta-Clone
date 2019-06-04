import React from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faComment, faHeart, faCompass, faUser
} from '@fortawesome/free-regular-svg-icons'
import PostContainer from './components/postContainer/PostContainer';
import CommentForm from './components/CommentForm/CommentForm';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faComment, faHeart, faInstagram, faCompass, faUser)
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      posts: dummyData
    }
    // this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment = (e, newComment, postKey) => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map((post, key) => {
          if(key === postKey) {
            post.comments.push({username: "aalejandromr", text: newComment})
          }
          return post;
        })
      }
    })
    e.preventDefault();
    // console.log(postKey);
  }

  render (){
    return (
      <div className="App">
        <header>
          <nav className="main-navbar">
            <div className="left-side">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="3x"/>
                <span> | </span>
                <h1> 
                  Instagram
                </h1>
            </div>
            <div className="center-side">
              <input type="text" placeholder="Look here"/>
            </div>
            <div className="right-side">
                <FontAwesomeIcon icon={['far', 'compass']} size="2x"/>
                <FontAwesomeIcon icon={['far', 'heart']} size="2x"/>
                <FontAwesomeIcon icon={['far', 'user']} size="2x"/>
            </div>
          </nav>
        </header>
          { this.state.posts.map( (post, key) => {
            return (
              <section className="post-wrapper" key={key}>
                  <PostContainer post={post} />
                  <CommentForm handleAddition={this.handleSubmitComment} postKey={key}/>
              </section>
              )
            }
          )}
      </div>
    );
  }
}

export default App;
