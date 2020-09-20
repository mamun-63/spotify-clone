import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'


const spotify = new SpotifyWebApi() // create a new instance of that Spotify Web Api

function App() {
  // in react, thats how we handle variables  using state 
  const [token, setToken] = useState(null)

  // when hit the login> Agree button, App component loads and this code will fire
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "" // you cant see the access token in url now for security reason, thats cool
    const _token = hash.access_token  // thats standerd to use _token as we have in useState() a token variable

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token)  // set it to connect react app to spotify api

      // .getMe() basically returns a promise, asynchronous, so .then can use and check if users is created and not 
      spotify.getMe().then(user => {
        console.log("user > ", user)
      })
    }

    console.log("Access Token > ", token)
  }, [])

  return (
    // BEM
    <div className="app">
      {/* thats how we write Javascript code inside the return - {} */}
      { token ? <h1>I am logged in</h1> : <Login /> }

    </div>
  );
}

export default App;
