import React from 'react';
import PropTypes from 'prop-types';
import "./User.css";

function User(props){
  return (
    <div className="User">
      <span>Name :{props.name} Age :{props.age}</span>
    </div>
  );
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
}

export default User;
