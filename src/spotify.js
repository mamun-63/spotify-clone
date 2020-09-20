// get all the info in this spotify documentation > Authorization
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/"
const clientId = "53f716993b3d4f819f5b87acc3bdd155"

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
]

// login > hitting confirm > response back the url with access token
// localhost:3000/#access_token=BQAaoOWb9OaxXKTpNg3IGhHB9eYu8N8AMmKQjXSJ45WaqDJYU51EbB90mS02aWePCK7vlISj6oGJHi8RO9UNOX5ll6tJtRcvztW0LxsCfqU9wgluuka8uGA_VprcR26RyvkAjhaz5hTGtQcCvUvafNZvFS-m01x9WFCpE3boCzViyAZK&token_type=Bearer&expires_in=3600 
// localhost:3000/#access_token=mySuperSecretkey&token_type=Bearer&expires_in=3600 
// we have to pull that access token now from url
export const getTokenFromUrl = () => {
  return window.location.hash 
    .substring(1) 
    .split('&') 
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      
      return initial
    }, {})  // {} this empty object for initial value in reduce rules
}

// `` backtick is string template, inside you can use javascript and string also
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
