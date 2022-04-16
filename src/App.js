import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput';

class App extends Component {

  render() {
    return (
      <div className='currency-converter'>
        <div className='currency-converter__title'>
          Currency Converter
        </div>
        <div>
          <UserInput></UserInput>
        </div>
      </div>
    );
  }
}

export default App;
