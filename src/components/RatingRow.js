import React from 'react';
import PropTypes from 'prop-types';

function RatingRow(props) {
  return (
        <tr>
          <td>{props.name}</td>
          <td>{props.views}</td>
          <td>{props.rating}</td>
        </tr>
  );
}

RatingRow.propTypes = {
  name: PropTypes.string,
  views: PropTypes.number,
  rating: PropTypes.number
}

export default RatingRow;