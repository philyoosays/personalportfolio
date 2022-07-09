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
    let data;
    if (process.env.NODE_ENV !== 'development') {
      data = JSON.parse(localStorage.getItem('insta-imgs'));
      console.log('local', data)
    } else {
      const res = await axios.get(`https://graph.instagram.com/v14.0/${process.env.REACT_APP_INSTA_USER_ID}/media`, {
        params: {
          access_token: process.env.REACT_APP_INSTA_ACCESS_TOKEN,
          fields: 'permalink,media_type,media_url'
        }
      })
      data = res.data.data;
      console.log('data', data)
      // localStorage.setItem('insta-imgs', JSON.stringify(data));
    }
    if (data) this.setState({ images: data });
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
