import {CHANGE,LOADING,LOADED} from '../actions'

export default (state = {name:'geniusmart'}, action) => {
  switch (action.type) {
    case CHANGE:
      return Object.assign({}, state, { name:"MR."+state.name });
    case LOADING:
      return Object.assign({}, state, { isLoading:true });
    case LOADED:
    default:
      return state
  }
}
