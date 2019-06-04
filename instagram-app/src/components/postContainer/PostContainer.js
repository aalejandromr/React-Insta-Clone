import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentSection from '../commentSection/CommentSection';
import PropTypes from 'prop-types';

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

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array
  })
}

export default PostContainer;
