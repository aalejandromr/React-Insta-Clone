import React from 'react'

const CommentSection = (props) => {
  return (
    <div className="comment-container">
        { props.comments.map((comment, key) => {
          return (
            <figure className="comment-wrapper" key={key}>
              <p > <strong> {comment.username} </strong> {comment.text} </p>
            </figure>
          )
        }) }
      </div>
  )
}

export default CommentSection;