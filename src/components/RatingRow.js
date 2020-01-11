import React from 'react';
import PropTypes from 'prop-types';
import './RatingRow.scss';

function RatingRow(props) {
  return (
        <tr>
          <td className="rating-text">{props.name}</td>
          <td className="rating-views">{props.views}</td>
          <td className="rating-score">{props.rating}</td>
        </tr>
  );
}

RatingRow.propTypes = {
  name: PropTypes.string,
  views: PropTypes.number,
  rating: PropTypes.number
}

export default RatingRow;