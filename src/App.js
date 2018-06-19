import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false
    }
    this.toggleAbout=this.toggleAbout.bind(this);
  }

  toggleAbout = () => {
    this.setState(prevState => {
      return {
        showAbout: !prevState.showAbout
      };
    });
  };

  render() {
    const props2018 = {width: 1446/4, scale: 1.7, img: '2018.png', offset: {vertical: 0, horizontal: 0}};
    const props2017 = {width: 1446/4, scale: 1.7, img: '2018.png', offset: {vertical: 0, horizontal: 0}};
    const props2016 = {width: 1446/4, scale: 1.7, img: '2018.png', offset: {vertical: 0, horizontal: 0}};
    const props2015 = {width: 1446/4, scale: 1.7, img: '2018.png', offset: {vertical: 0, horizontal: 0}};
    const props2014 = {width: 1446/4, scale: 1.7, img: '2018.png', offset: {vertical: 0, horizontal: 0}};
    const props2013 = {width: 1446/4, scale: 1.7, img: '2018.png', offset: {vertical: 0, horizontal: 0}};
    const props2010 = {width: 1446/4, scale: 1.7, img: '2018.png', offset: {vertical: 0, horizontal: 0}};
    return (
      <div>
        <div className={ !this.state.showAbout ? "about" : "aboutHidden"} onClick={this.toggleAbout}>about</div>
        <div className={ this.state.showAbout ? "aboutTextVisible" : "aboutTextHidden"} onClick={this.toggleAbout}>
        A visual exploration of how many times the world "you", or variations of it, gets mentioned in Apple Keynote events throughout the years.
        </div>
        <div className="main">
          <ReactImageZoom {...props2018} className="image"/> <div className="year">2018</div>
          <ReactImageZoom {...props2017} className="image"/> <div className="year">2017</div>
          <ReactImageZoom {...props2016} className="image"/> <div className="year">2016</div>
          <ReactImageZoom {...props2015} className="image"/> <div className="year">2015</div>
          <ReactImageZoom {...props2014} className="image"/> <div className="year">2014</div>
          <ReactImageZoom {...props2013} className="image"/> <div className="year">2013</div>
          <ReactImageZoom {...props2010} className="image"/> <div className="year">2010</div>
        </div>
        <div className="footer">a short project by <a href="https://kalli-retzepi.com/" target="_blank">Kalli</a></div>
      </div>

    );
  }
}

export default App;