import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleCommentSubmission = (e, postKey) => {
    e.preventDefault();
    this.props.handleAddition(e, this.state.comment, postKey)
    this.setState({
      comment: ""
    })
  }

  render () {
    return(
      <div className="more-comments-container">
        <form onSubmit={(e) => this.handleCommentSubmission(e, this.props.postKey)}>
          <input
            type="text"
            onChange={this.handleOnChange} 
            value={this.state.comment}
            placeholder="Add a comment..."
          />
          <input type="submit" className="display-none"/>
        </form>
      </div>
    )
  }
}

export default CommentForm;