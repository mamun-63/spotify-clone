import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi() // create a new instance of that Spotify Web Api

function App() {
  // in react, thats how we handle variables  using state 
  const [token, setToken] = useState(null)

  // first {} is if we need any value to pull from data layer
  // dispatch is like gun, so to shoot into tha data layer and update the values
  const [{ user }, dispatch] = useDataLayerValue()  // grabing the user to check here whether its updated in layer or not after dispatching user

  // when hit the login> Agree button, App component loads and this code will fire
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "" // you cant see the access token in url now, applied security, thats cool
    const _token = hash.access_token  // thats standerd to use _token as we have in useState() a token variable

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token)  // set it to connect react app to spotify api

      // .getMe() basically returns a promise, asynchronous, so .then can use and check if users is created and not 
      spotify.getMe().then(user => {
        // console.log("user > ", user)
        dispatch({
          type: 'SET_USER',
          user,
        })
      })
    }

    console.log("Access Token > ", token)
  }, [])

  // here checking after dispatching the user to data layer
  // and pull the user in: const [{ user }, dispatch] = useDataLayerValue() and check this if it updates the layer or not 
  // as it was empty in initial state
  console.log("user > ", user)

  return (
    // BEM
    <div className="app">
      {/* thats how we write Javascript code inside the return - {} */}
      { token ? <Player /> : <Login /> }

    </div>
  );
}

export default App;
