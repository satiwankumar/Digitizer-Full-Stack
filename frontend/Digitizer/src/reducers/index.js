import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import lugger from './lugger'
import reports from './reports'
import booking from './booking'

export default combineReducers({
  alert,
  auth,
  profile,
  lugger,
  reports,
  booking
});
