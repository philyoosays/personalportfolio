import React from 'react';
import axios from 'axios';
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

  async componentDidMount() {
    await this.fetchAndSetInstagram()
    this.updateWindowDim()
    window.addEventListener('resize', this.updateWindowDim)
  }

  async fetchAndSetInstagram() {
    const res = await axios.get(`https://graph.instagram.com/v14.0/${process.env.REACT_APP_INSTA_USER_ID}/media`, {
      params: {
        access_token: process.env.REACT_APP_INSTA_ACCESS_TOKEN,
        fields: 'permalink,media_type,media_url'
      }
    })
    const data = res.data.data;
    console.log(data)
    this.setState({
      images: data,
      windowWidth: window.innerWidth
    })
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
          return (
            <div className="imgcontainer" >
              <img className="image" src={data.media_url} alt="" />
            </div>
          )
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
