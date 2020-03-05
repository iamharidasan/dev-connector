import React, { useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getPost } from "../../actions/post"
import Spinner from "../layout/Spinner"
import { Link } from "react-router-dom"
import SinglePostTop from "./SinglePostTop"
import Comments from "./Comments"
import CommentForm from "./CommentForm"

const SinglePost = ({ match, getPost, post: { post, loading } }) => {
  useEffect(() => {
    getPost(match.params.id)
  }, [getPost, match.params.id])
  return (
    <Fragment>
      {post === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/posts" className="btn">
            Back To Posts
          </Link>
          {post && <SinglePostTop post={post} />}
          <CommentForm post={post._id} />
          <div className="comments">
            {post.comments &&
              post.comments.map(comment => (
                <Comments postid={post._id} comment={comment} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

SinglePost.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPost })(SinglePost)
