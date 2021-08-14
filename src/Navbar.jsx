import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
class Navbar extends Component {
  state = {}
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbarColor'>
        <div className='container'>
          <a className='navbar-brand fontFamily' href='/'>
            EgyBest
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/home'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/movies'>
                  Movies
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/tv'>
                  Tv
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
