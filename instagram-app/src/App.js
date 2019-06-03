import React from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faComment, faHeart} from '@fortawesome/free-regular-svg-icons'
import PostContainer from './components/postContainer/PostContainer';
import CommentForm from './components/CommentForm/CommentForm';

library.add(faComment, faHeart)
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      posts: dummyData
    }
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment(e, newComment, postKey) {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map((post, key) => {
          if(key === postKey) {
            post.comments.push({username: "aalejandromr", text: newComment})
          }
          return post;
        })
          // prevState.posts.map()
      }
    })
    e.preventDefault();
    // console.log(postKey);
  }

  render (){
    return (
      <div className="App">
        <header>
          
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
