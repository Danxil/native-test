import { RSAA } from 'redux-api-middleware';

export const getUserInfo = () => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_REST_URL}/user`,
    method: 'GET',
    types: [
      'GET_USER_INFO_REQUEST',
      { type: 'GET_USER_INFO_SUCCESS' },
      { type: 'GET_USER_INFO_FAILURE' },
    ],
  },
});

export const logout = () => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_REST_URL}/logout`,
    method: 'GET',
    types: [
      'LOGOUT_REQUEST',
      'LOGOUT_SUCCESS',
      'LOGOUT_FAILURE',
    ],
  },
});
