import React from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faComment, faHeart, faCompass, faUser
} from '@fortawesome/free-regular-svg-icons'
import PostContainer from './components/postContainer/PostContainer';
import CommentForm from './components/CommentForm/CommentForm';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import SearchBar from './components/searchBar/SearchBar'

library.add(faComment, faHeart, faInstagram, faCompass, faUser, faSearch)
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      posts: [],
      filtered: [],
      search: ""
    }
    // this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  componentDidMount()
  {
    this.setState({
      posts: dummyData,
      filtered: dummyData
    })
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

  handleLikes = (postKey) => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map((post, key) => {
          if(key === postKey) {
            post.likes++
          }
          return post;
        })
      }
    })
    // console.log(postKey);
  }

  handleSearch = (e) => {
    const search = new RegExp(e.target.value, "i");
    this.setState(prevState => {
      return {
        filtered: prevState.posts.filter(post => {
          return search.test(post.username)
        })
      }
    })
      // console.log(this.state.posts.map(post => post.username))
    // console.log(this.state.search)
  }

  render (){
    return (
      <div className="App">
        <header>
          <SearchBar handleSearch={this.handleSearch} search={this.state.search}/>
        </header>
        <section className="main-body">
          { this.state.filtered.map( (post, key) => {
            return (
              <section className="post-wrapper" key={key}>
                  <PostContainer post={post} handleLikes={() => this.handleLikes(key)}/>
                  <CommentForm handleAddition={this.handleSubmitComment} postKey={key}/>
              </section>
              )
            }
          )}
        </section>
      </div>
    );
  }
}

export default App;
