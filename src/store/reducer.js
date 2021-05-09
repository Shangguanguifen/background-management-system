import * as actionTypes from './actionTypes'

const defaultState = {
  roles: ["user"],
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case actionTypes.CREAT_SET_ROLES:
      newState.roles = action.value;
      break;
    default:
      return newState;
  }
  return newState;
}