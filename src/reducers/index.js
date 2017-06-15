import {CHANGE,LOADING,LOADED} from '../actions'

const defaultState = {
  name:'geniusmart',
  isLoading:false,
  datas:[]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE:
      //TODO: 更方便的写法
      return Object.assign({}, state, { name:"MR."+state.name });
    case LOADING:
      return Object.assign({}, state, { isLoading:true });
    case LOADED:
      return Object.assign({}, state,
          {
            isLoading:false ,
            datas: action.json,
          });
    default:
      return state
  }
}
