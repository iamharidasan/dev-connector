import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Moment from "react-moment"
import { connect } from "react-redux"
import { deleteComment } from "../../actions/post"

const Comments = ({
  comment: { _id, date, text, name, user, avatar },
  loggedInuser,
  deleteComment,
  postid
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
        </p>
        {loggedInuser._id === user && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={e => deleteComment(postid, _id)}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  )
}

Comments.propTypes = {
  comment: PropTypes.object.isRequired,
  loggedInuser: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  postid: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  loggedInuser: state.auth.user
})

export default connect(mapStateToProps, { deleteComment })(Comments)
