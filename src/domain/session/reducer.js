import { LOGIN, LOGIN_ERROR, LOGIN_IN_PROGRESS, LOGOUT } from './actionTypes';
const INITIAL_STATE = {
  loggedIn: false,
  loggingIn: false,
  userInfo: undefined,
  error: undefined
};

export const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_IN_PROGRESS:
        return {
            ...state,
            loggingIn: true
        }
    case LOGIN:
        return {
            ...state,
            loggedIn: true,
            userInfo: action.payload
        }
    case LOGIN_ERROR:

        return {
            ...state,
            loggedIn: false,
            loggingIn: false,
            userInfo: {},
            error: action.payload.error
        }
    case LOGOUT:
        return {
            ...INITIAL_STATE
        }
    default:
      return state
  }
};

