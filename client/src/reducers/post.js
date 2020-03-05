import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types"

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload, loading: false }

    case ADD_POST:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, payload]
      }

    case ADD_COMMENT:
      return {
        ...state,
        loading: false,
        post: { ...state.post, comments: payload }
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        loading: false,
        post: { ...state.post, comments: payload }
      }

    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      }

    case POST_ERROR:
      return { ...state, loading: false, error: payload }

    case UPDATE_LIKES:
      return {
        ...state,
        loading: false,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        )
      }
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post._id !== payload)
      }

    default:
      return state
  }
}
