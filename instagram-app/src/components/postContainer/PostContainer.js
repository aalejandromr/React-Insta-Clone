import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentSection from '../commentSection/CommentSection';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const PostContainer = (props) => {
  return (
    <div className="post-container">
      <div className="header-container">
        <figure>
          <img alt="" src={props.post.thumbnailUrl}></img>
        </figure>
        <div className="username">
          <strong> {props.post.username} </strong>
        </div>
      </div>
      <div className="img-container">
        <figure>
          <img alt="" src={props.post.imageUrl}/>
        </figure>
      </div>
      <div className="action-container">
        <figure>
          <FontAwesomeIcon icon={['far', 'heart']} size={"2x"} onClick={props.handleLikes}/>
          <FontAwesomeIcon icon={['far', 'comment']} size={"2x"}/>
        </figure>
      </div>
      <div className="likes-container">
        <strong> {props.post.likes} likes </strong>
      </div>
      <CommentSection comments={props.post.comments}/>
      <p className="post-time"> <Moment fromNow>{new Date(props.post.timestamp.replace(/th|rd/, ""))}</Moment> </p>
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
