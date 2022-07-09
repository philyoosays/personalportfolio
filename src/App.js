import React from 'react';
import axios from 'axios';
import Header from './Header';
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
    const { images } = this.state;
    return(
      <div>
        <Header images={images} />
        {/* <div className="bodystart">
          <MainBody
            width={this.state.windowWidth}
            height={this.state.windowHeight}
          />
        </div> */}
      </div>
    );
  }
}

export default App;
