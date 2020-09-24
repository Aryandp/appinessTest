

import { client } from 'utils/client';

export function login(loginForm) {
  return {
    type: 'LOGIN',
    payload: client.post('/login', loginForm),
  };
}

export function logout(token) {
  return {
    type: 'LOGOUT',
    payload: client.get('/api/oauth/logout/' + token),
  };
}

export function getUserDetails(id) {
  return {
    type: 'GET_USER_DETAILS',
    payload: client.get(`/user/${id}`)
  };
}
