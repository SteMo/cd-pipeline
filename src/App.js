import React from 'react';
import './App.css';
import RatingTable from './components/RatingTable';

function App() {

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
