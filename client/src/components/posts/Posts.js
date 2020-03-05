import React, { Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getPosts, addPost } from "../../actions/post"
import Spinner from "../layout/Spinner"
import Post from "./Post"

const Posts = ({ posts, getPosts, auth, loading, addPost }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  const [formData, setFormData] = useState({
    text: ""
  })

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community!
      </p>
      {auth.isAuthenticated && (
        <div className="post-form">
          <div className="bg-primary p">
            <h3>Say Something...</h3>
          </div>
          <form
            className="form my-1"
            onSubmit={e => {
              e.preventDefault()
              addPost(formData)
            }}
          >
            <textarea
              name="text"
              cols="30"
              rows="5"
              placeholder="Create a post"
              required
              onChange={e => onChange(e)}
            ></textarea>
            <input type="submit" className="btn btn-dark my-1" value="Submit" />
          </form>
        </div>
      )}

      <div className="posts">
        {posts.length === 0 || loading ? (
          <Spinner />
        ) : (
          posts.map(post => <Post key={post._id} post={post} />)
        )}
      </div>
    </Fragment>
  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  addPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  auth: state.auth,
  loading: state.post.loading
})

export default connect(mapStateToProps, { getPosts, addPost })(Posts)
