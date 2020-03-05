import React, { Fragment } from "react"

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i class="fas fa-exclamation-triangle"></i> Page Not Found
      </h1>
      <p className="text-large">Sorry this page doesn't exits</p>
    </Fragment>
  )
}

export default NotFound
