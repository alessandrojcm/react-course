import {
  CREATE_STREAM,
  LOADING,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  streams: [],
};

export const streamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { loading: false, streams: [...state.streams, action.payload] };
    case FETCH_STREAMS:
      return { loading: false, streams: [...state.streams, ...action.payload] };
    case FETCH_STREAM:
      return { loading: false, streams: [...state.streams, action.payload] };
    case EDIT_STREAM:
      return { loading: false, streams: [...state.streams, action.payload] };
    case DELETE_STREAM:
      return {
        loading: false,
        streams: state.streams.filter((s) => s.id !== action.patch),
      };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
