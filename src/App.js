import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		<Header></Header>
		<div id="colorlib-main">
			<Home></Home>
			<About></About>
			<Skills></Skills>
			<Projects></Projects>
			<Footer></Footer>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;