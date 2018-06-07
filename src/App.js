import React from 'react';
import MainBody from './MainBody'
import './App.css';

import dotenv from 'dotenv';
dotenv.config()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
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
            images: theImages
          })
        })
  }

  render() {
    const imageRowOne = this.state.images.length === 0 ? '' : this.state.images.map((data, index) => {
      if(index < 6) {
        if(data.width === data.height) {
          return(
            <div className="imgcontainer">
              <img className="image" src={data.url} />
            </div>
          )
        } else {
          let backImage = {backgroundImage: 'url(' + data.url + ')'}
          return(
              <div className="img" style={backImage} />
          )
        }
      }
      return ''
    })
    const imageRowTwo = this.state.images.length === 0 ? '' : this.state.images.map((data, index) => {
      if(index >= 6 && index < 12) {
        if(data.width === data.height) {
          return(
            <div className="imgcontainer">
              <img className="image" src={data.url} />
            </div>
          )
        } else {
          // return(
          //   <div className="imgcontainersquared">
          //     <img className="imagesquared" src={data.url} />
          //   </div>
          // )
          let backImage = {backgroundImage: 'url(' + data.url + ')'}
          return(
              <div className="img" style={backImage} />
          )
        }
      }
      return ''
    })
    const imageRowThree = this.state.images.length === 0 ? '' : this.state.images.map((data, index) => {
      if(index >= 12 && index < 18) {
        if(data.width === data.height) {
          return(
            <div className="imgcontainer">
              <img className="image" src={data.url} />
            </div>
          )
        } else {
          let backImage = {backgroundImage: 'url(' + data.url + ')'}
          return(
              <div className="img" style={backImage} />
          )
        }
      }
      return ''
    })
    const imageRowFour = this.state.images.length === 0 ? '' : this.state.images.map((data, index) => {
      if(index >= 18 && index < 24) {
        if(data.width === data.height) {
          return(
            <div className="imgcontainer">
              <img className="image" src={data.url} />
            </div>
          )
        } else {
          let backImage = {backgroundImage: 'url(' + data.url + ')'}
          return(
              <div className="img" style={backImage} />
          )
        }
      }
      return ''
    })
    return(
      <div>
        <div className="topborder"></div>
        <div className="imageRow">
          {imageRowOne}
        </div>
        <div className="imageRow">
          {imageRowTwo}
        </div>
        <div className="imageRow">
          {imageRowThree}
        </div>
        {/*<div className="imageRow">
          {imageRowFour}
        </div> */}
        <h1 className="myname">PHIL YOO</h1>
        <div className="bodystart">
          <MainBody />
        </div>
        <div className="bottomborder">
          <div className="descriptcontainer">
            <h2 className="mydescript">FULL-STACK WEB DEVELOPER</h2>
            <h2 className="mydescript">VIDEO PRODUCER</h2>
            <h2 className="mydescript">NYC</h2>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
