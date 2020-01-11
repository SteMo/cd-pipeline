import React from 'react';
import logo from './logo.svg';
import './App.css';
import RatingRow from './components/RatingRow';
import RatingTable from './components/RatingTable';

function App() {

  const listItems = stories.map((story) =>
    <RatingRow key={story.name} name={story.name} views={story.views} rating={story.rating}></RatingRow>
  );

  return (
    <div className="App">
      <h1>Top X Stories</h1>
      <RatingTable storyList={stories} />
    </div>
  );
}

const stories = [
  { name: "Dr. Sommer", views: 200, rating: 9 },
  { name: "Chili-Tester", views: 150, rating: 8 }
];

export default App;
