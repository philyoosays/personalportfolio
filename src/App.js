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
    this.updateWindowDim = this.updateWindowDim.bind(this)
  }

  componentDidMount() {
    fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTAGRAM}`)
      .then(response => response.json())
        .then(data => {
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
        this.updateWindowDim()
    window.addEventListener('resize', this.updateWindowDim)
  }

  updateWindowDim() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  render() {
    const divHeight = (this.state.windowWidth * .166)
    const backSplash = this.state.images.length === 0 ?
      <div>
        <div className="noimg" />
        <div className="noimg" />
        <div className="noimg" />
      </div>
      : this.state.images.map((data, index) => {
        if(index < 18) {
          if(data.width === data.height) {
            return(
              <div className="imgcontainer" >
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
        return '';
      })

    const bottomPos = {top: divHeight * 2.7}
    const bodStart = {top: this.state.windowWidth > 600 ?
                          (this.state.windowWidth / 10 + '%') :
                          (this.state.windowWidth / 8 + '%')}
    // const bodStart = {top: this.state.windowWidth >= 1000 ?
    //                       this.state.windowHeight :
    //                       this.state.windowHeight * .8}
    const topPos = {top: this.state.windowWidth > 700 ? '-35%' :
      window.innerWidth < 700 && window.innerWidth > 400 ? '-38%' : '-44%'}
    return(
      <div>
        <div className="topborder" style={topPos}></div>
        <div className="imageRow">
          {backSplash}
        </div>
        <div className="bodystart" style={bodStart}>
          <MainBody
            width={this.state.windowWidth}
            height={this.state.windowHeight}
          />
        </div>
        <div className="bottomborder" style={bottomPos}>
          <h1 className="myname">PHIL YOO</h1>
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
