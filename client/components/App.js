import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Title</h1>
        {this.props.children}
      </div>
    )
  }
})
