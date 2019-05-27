import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import { streamReducer } from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  streams: streamReducer,
});
