import React from 'react';
import Navbar from './components/Navbar'; // Navbar for navigation
import Collection from './components/collection'; // Collection component for another section

const App = () => {
  return (
    <div>
      <Navbar />
      <Collection />
    </div>
  );
};

export default App;
