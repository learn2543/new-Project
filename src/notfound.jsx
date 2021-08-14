import React, { Component } from 'react'
import notFoundStyle from './notFound.module.css'
class NotFound extends Component {
  state = {}
  render () {
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <h1 className={`text-center ${notFoundStyle.fontBigger}`}>404 Page</h1>
      </div>
    )
  }
}

export default NotFound
