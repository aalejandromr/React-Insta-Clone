import React from 'react';
import dummyData from '../../dummy-data';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faComment, faHeart, faCompass, faUser
} from '@fortawesome/free-regular-svg-icons'
import PostContainer from '../postContainer/PostContainer';
import CommentForm from '../CommentForm/CommentForm'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import SearchBar from '../searchBar/SearchBar'

library.add(faComment, faHeart, faInstagram, faCompass, faUser, faSearch);

export default class PostPage extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      posts: dummyData,
      filtered: dummyData,
      search: ""
    }
  }

  componentDidMount()
  {
    if(localStorage.length > 0) {
      this.setState({
        filtered: JSON.parse(localStorage.posts),
        posts: JSON.parse(localStorage.posts)
      })
    }
    window.addEventListener('beforeunload', () => {
      for (let key in this.state) {
        // save to localStorage
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    })
  }

  handleSubmitComment = (e, newComment, postKey) => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map((post, key) => {
          if(key === postKey) {
            post.comments.push({username: localStorage.getItem("user"), text: newComment})
          }
          return post;
        })
      }
    })
    e.preventDefault();
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
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render()
  {
    return (
      <div className="App">
        <header>
          <SearchBar handleSearch={this.handleSearch} search={this.state.search}/>
        </header>
        <section className="main-body">
          {
            this.state.posts.map((post, key) => {
              if(RegExp(this.state.search,"i").test(post.username)){
                return (
                  <section className="post-wrapper" key={key}>
                      <PostContainer post={post} handleLikes={() => this.handleLikes(key)}/>
                      <CommentForm handleAddition={this.handleSubmitComment} postKey={key}/>
                  </section>
                  )
              }
            })
          }
        </section>
      </div>
    );
  }
}