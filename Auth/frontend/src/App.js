
import './App.css';
import React, { Component } from 'react'
import SignupForm from './components/SignupForm';
import CakeComponent from './components/CakeComponent'
import { Provider } from 'react-redux';
import store from './redux/store'
//import Image from './components/Image';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <SignupForm />
        <Provider store={store} >
        <CakeComponent />
        </Provider>
      </div>
    )
  }
}

export default App;
