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
      posts: dummyData,
      filtered: dummyData,
      search: ""
    }
    // this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  componentDidMount()
  {
    // // for all items in state
    // for (let key in this.state) {
    //   // if the key exists in localStorage
    //   if (localStorage.hasOwnProperty(key)) {
    //     // get the key's value from localStorage
    //     let value = localStorage.getItem(key);

    //     // parse the localStorage string and setState
    //       value = JSON.parse(value);
    //       this.setState({ [key]: value });
    //   }
    // }
    if(localStorage.length > 0) {
      this.setState({
        filtered: JSON.parse(localStorage.posts),
        posts: JSON.parse(localStorage.posts)
      })
    }
    // this.setState({
    //   filtered: dummyData,
    //   posts: dummyData
    // })
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    // window.addEventListener("")
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
            post.comments.push({username: "aalejandromr", text: newComment})
          }
          return post;
        }),
        filtered: prevState.filtered.map((post, key) => {
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
        }),
        filtered: prevState.filtered.map((post, key) => {
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
