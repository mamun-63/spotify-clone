export const initialState = {
  user: null,
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

    default:
      return state

  }
}

export default reducer