export const initialState = {
  user: null,

  // change token: null, after finished developing, this is doing just for our convenience 
  token: 'BQBgpcYgQFCyJGMlV0yTOWD4CF-x-At_XPhznQwuDbb9WqRK_CWnmkHVHYMnveITC9-ukjLwCtsAgjXu8yl7yrH289fp0QZ7mNHow0BAt7eO95eyEoG9OPRz6K6mlSyEV76usyHrHZCYtkXpBh7BGxxJQoBjRsOxywOMwwFMvTlv4hlx',

  playlists: [],
  playing: false,
  item: null,
}

// creating reducer, reducer listens action that is dispatched
const reducer = (state, action) => {
  console.log("checking action > ",action) // must do this to check whether action is coming or not

  // Action has two things -> type, [payload]
  // type is 'SET_USER' and payload is user 
  switch(action.type) {
    case 'SET_USER':
    // in return says - keep the current state, and just update user 
    // user: action.user - just update the user whatever inside the action was
      return {
        ...state,
        user: action.user
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }

    default:
      return state

  }
}

export default reducer