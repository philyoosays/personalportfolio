import React from 'react';
import axios from 'axios';
import Header from './components/Header';
// import MainBody from './MainBody'
import './App.css';

class App extends React.Component {
  state = {
    images: []
  }

  async componentDidMount() {
    await this.fetchAndSetInstagram()
  }

  async fetchAndSetInstagram() {
    const res = await axios.get(`https://graph.instagram.com/v14.0/${process.env.REACT_APP_INSTA_USER_ID}/media`, {
      params: {
        access_token: process.env.REACT_APP_INSTA_ACCESS_TOKEN,
        fields: 'permalink,media_type,media_url'
      }
    })
    const data = res.data.data;
    this.setState({ images: data })
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
