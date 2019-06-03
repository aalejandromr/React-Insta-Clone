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

  render () {
    return(
      <div className="more-comments-container">
        <form onSubmit={(e) => this.props.handleAddition(e, this.state.comment, this.props.postKey)}>
          <input type="text" onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CommentForm;