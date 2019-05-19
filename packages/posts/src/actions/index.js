import api from '../apis/jsonPlaceholder';
import { map, uniq } from 'lodash-es';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = uniq(map(getState().posts, 'userId'));
  userIds.forEach((us) => dispatch(fetchUser(us)));
};

export const fetchPosts = () => async (dispatch) => {
  const posts = await api.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: posts.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const user = await api.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: user.data,
  });
};
