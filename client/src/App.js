import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/home' component={MovieList} />
      <Route exact path='/movies/:id' component={Movie} />
    </div>
  );
};


export default App;
