import streams from '../common/apis/streams';
import {
  CREATE_STREAM,
  LOADING,
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';

export const signIn = (userId = null) => ({
  type: SIGN_IN,
  payload: {
    userId,
  },
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const setLoading = (loading) => ({
  type: LOADING,
  payload: loading,
});

export const createStream = (formData) => async (dispatch) => {
  const response = await streams.post('/streams', formData);

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};

export const editStream = (streamData) => async (dispatch) => {
  const { id, ...rest } = streamData;

  const response = await streams.patch(`/streams/${id}`, rest);

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
};
