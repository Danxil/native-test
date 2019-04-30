import { connect } from 'react-redux';
import {
  getUserInfo,
  logout,
} from '../user/actions';

export default () => connect(
  ({
    user: {
      userInfo,
      userInfoRequestDone,
    },
  }) => ({
    userInfo,
    userInfoRequestDone,
  }),
  dispatch => ({
    getUserInfo() {
      return dispatch(getUserInfo());
    },
    logout() {
      return dispatch(logout());
    },
  }),
);
