import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ userId, user }) => {
  if (!user) {
    return <div className="loader"/>;
  }

  return <div className="header">Author: {user.name}</div>;
};

const mapStateToProps = ({ users }, { userId }) => ({
  user: users.find((us) => us.id === userId)
});

export default connect(
  mapStateToProps
)(UserHeader);
