import axios from 'axios'
import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Movies from './movies'
import Navbar from './Navbar'
import NotFound from './notfound'
import Tv from './Tv'
class App extends Component {
  state = {
    movies: [],
    tv: []
  }

  getTrending = async mediaType => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`
    )
    this.setState({ [mediaType]: data.results })
  }
  componentDidMount () {
    this.getTrending('movies')
    this.getTrending('tv')
  }
  render () {
    let { movies, tv } = this.state
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            path='/home'
            render={props => (
              <Home {...props} trendMovies={movies} trendTv={tv} />
            )}
          />
          <Route
            path='/movies'
            render={props => <Movies {...props} trendMovies={movies} />}
          />
          <Route path='/tv' render={props => <Tv {...props} trendTv={tv} />} />
          <Route path='/notfound' component={NotFound} />

          <Redirect from='/' exact to='/home' />
          <Redirect to='/notfound' />
        </Switch>
      </>
    )
  }
}

export default App
