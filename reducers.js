export default function login(state = {user: null}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {user: action.data};
    default:
      return state;
  }
}
