import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UserHeader from './UserHeader';
import { fetchPostsAndUsers } from '../actions';

const PostList = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, []);

  if (posts.length === 0) {
    return <section className="ui loader" />;
  }

  return (
    <section className="ui relaxed divided list">
      {posts.map((item) => (
        <div className="item" key={item.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{item.title}</h2>
              <br />
              <p>{item.body}</p>
            </div>
            <UserHeader userId={item.userId} />
          </div>
        </div>
      ))}
    </section>
  );
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(
  mapStateToProps,
  {
    fetchPostsAndUsers,
  },
)(PostList);
