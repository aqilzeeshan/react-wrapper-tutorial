import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ children,details, title }) {
  return(
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {details}
      </div>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), 
    PropTypes.element.isRequired
  ]),
  details: PropTypes.element,
  title: PropTypes.string.isRequired,
}

/*
This prop will have the same type as children, but it should be optional. 
To make it optional, you add a default value of null. In this case, if a user passes no details, 
the component will still be valid and will not display anything extra.
*/
Card.defaultProps = {
    details: null,
}