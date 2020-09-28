import { render } from '@testing-library/react';
import React from 'react';
import '../../containers/NavBarContainer/NavBarContainer'
import NavBarContainer from '../../containers/NavBarContainer/NavBarContainer';
// import HomePage from '../HomePage/HomePage';
import ImageSlider from '../ImageSlider/ImageSlider'
import './App.css';

class App extends React.Component{
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
      <div className="App">
        <ImageSlider />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <ImageSlider />
//     </div>
//   );
// }

export default App;
