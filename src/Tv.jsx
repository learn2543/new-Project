import React, { Component } from 'react'

class Tv extends Component {
  state = {}
  render () {
    let { trendTv } = this.props
    return (
      <div className='container my-5'>
        <div className='row'>
          {trendTv.map(movie => (
            <div key={movie.id} className='col-md-3'>
              <div className='movie'>
                <img
                  src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                  alt=''
                  className='w-100'
                />
                <h3 className='py-2'>
                  {movie.title}
                  {movie.name}
                </h3>
                <div className='vote'>{movie.vote_average}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Tv
