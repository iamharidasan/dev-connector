import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addComment } from "../../actions/post"

const CommentForm = ({ addComment, post }) => {
  const [formData, setFormData] = useState({
    text: ""
  })
  const onChange = e =>
    setFormData({
      [e.target.name]: e.target.value
    })
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave A Comment</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault()
          addComment(post, formData)
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment on this post"
          required
          onChange={e => onChange(e)}
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  post: PropTypes.string.isRequired
}

export default connect(null, { addComment })(CommentForm)
