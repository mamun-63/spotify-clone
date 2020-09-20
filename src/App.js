import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';


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
