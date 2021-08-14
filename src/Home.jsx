import React, { Component } from 'react'
class Home extends Component {
  state = {}
  render () {
    let { trendMovies, trendTv } = this.props
    return (
      <>
        <div className='container my-5'>
          <div className='row'>
            {trendMovies.slice(0, 12).map(movie => (
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

        <div className='container my-5'>
          <div className='row'>
            {trendTv.slice(0, 12).map(movie => (
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
      </>
    )
  }
}

export default Home
