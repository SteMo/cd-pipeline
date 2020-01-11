import React from 'react';
import logo from './logo.svg';
import './App.css';
import RatingRow from './RatingRow';
import PropTypes from 'prop-types';


function RatingTable({storyList}) {

  

  const listItems = storyList.map((story) =>
    <RatingRow key={story.name} name={story.name} views={story.views} rating={story.rating}></RatingRow>
  );

  return (
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Views</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
  );
}

RatingTable.propTypes = {
  storyList: PropTypes.array.isRequired
}

export default RatingTable;
