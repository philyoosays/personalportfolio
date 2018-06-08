import React from 'react';
import MainBody from './MainBody'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      windowWidth: 0,
      windowHeight: 0
    }
    this.resetWindowWidth = this.resetWindowWidth.bind(this)
  }

  componentWillMount() {
    fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTAGRAM}`)
      .then(response => response.json())
        .then(data => {
          console.log('API Data: ', data)
          let theImages = []
          data.data.forEach((data, index) => {
            let apiImages = data.images.low_resolution;
            if(data.hasOwnProperty('images') && theImages.length < 24) {
              theImages.push({url: apiImages.url, height: apiImages.height, width: apiImages.width})
            }
          })
          this.setState({
            images: theImages,
            windowWidth: window.innerWidth
          })
        })
  }

  resetWindowWidth() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  render() {
    let toggle = false;
    const divHeight = (this.state.windowWidth * .166)
    const backSplash = this.state.images.length === 0 ? '' : this.state.images.map((data, index) => {
      if(index < 18) {
        if(data.width === data.height && toggle === false) {
          toggle = true;
          return(
            <div className="imgcontainer" onResize={this.resetWindowWidth} >
              <img className="image" src={data.url} alt="" />
            </div>
          )
        } else if(data.width === data.height && toggle === true) {
          return(
            <div className="imgcontainer">
              <img className="image" src={data.url} alt="" />
            </div>
          )
        } else {
          let backImage = {backgroundImage: 'url(' + data.url + ')', height: divHeight + 'px'}
          return(
              <div className="img" style={backImage} />
          )
        }
      }
    })

    return(
      <div>
        <div className="topborder"></div>
        <div className="imageRow">
          {backSplash}
        </div>
        <div className="bodystart">
          <MainBody />
        </div>
        <div className="bottomborder">
          <h1 className="myname">PHIL YOO</h1>
          <div className="descriptcontainer">
            <h2 className="mydescript">FULL-STACK WEB DEVELOPER</h2>
            <h2 className="mydescript">NYC</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
