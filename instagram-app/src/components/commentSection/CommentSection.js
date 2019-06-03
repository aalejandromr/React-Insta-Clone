import React from 'react'

const CommentSection = (props) => {
  return (
    <div className="comment-container">
        { props.comments.map((comment, key) => {
          return <p key={key}> <strong> {comment.username} </strong> {comment.text} </p>
        }) }
      </div>
  )
}

export default CommentSection;