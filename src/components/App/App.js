import React from 'react';
import '../../containers/NavBarContainer/NavBarContainer'
import NavBarContainer from '../../containers/NavBarContainer/NavBarContainer';
// import HomePage from '../HomePage/HomePage';
import ImageSliderContainer from '../../containers/ImageSliderContainer/ImageSliderContainer'
import './App.css';

const App = () => {
    return (
      <div className="App">
        <NavBarContainer />
        <ImageSliderContainer />
      </div>
    )
}

export default App;
