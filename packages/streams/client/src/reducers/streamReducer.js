import { omit, mapKeys } from 'lodash-es';

import {
  CREATE_STREAM,
  LOADING,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  streams: {},
};

export const streamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case FETCH_STREAM:
    case EDIT_STREAM:
      return {
        loading: false,
        streams: { ...state.streams, [action.payload.id]: action.payload },
      };
    case DELETE_STREAM:
      return {
        loading: false,
        streams: omit(state.streams, action.payload),
      };
    case FETCH_STREAMS:
      return {
        loading: false,
        streams: { ...state.streams, ...mapKeys(action.payload, 'id') },
      };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
