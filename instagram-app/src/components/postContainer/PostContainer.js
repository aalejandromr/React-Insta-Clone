import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentSection from '../commentSection/CommentSection';

const PostContainer = (props) => {
  return (
    <div className="post-container">
      <div className="header-container">
        <figure>
          <img alt="" src={props.post.thumbnailUrl}></img>
        </figure>
        <div className="username">
          {props.post.username}
        </div>
      </div>
      <div className="img-container">
        <figure>
          <img alt="" src={props.post.imageUrl}/>
        </figure>
      </div>
      <div className="action-container">
        <FontAwesomeIcon icon={['far', 'heart']}/>
        <FontAwesomeIcon icon={['far', 'comment']}/>
      </div>
      <div className="likes-container">
        <p> {props.post.likes} likes </p>
      </div>
      <CommentSection comments={props.post.comments}/>
    </div>
  )
}

export default PostContainer;
