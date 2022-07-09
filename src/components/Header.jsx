import React from 'react';

import './styles/header.css';

const Header = ({ images }) => {
    const makeImages = () => images.map(data => (
        <div className="imgcontainer" >
          <img className="image" src={data.media_url} alt="" />
        </div>
    )).slice(0, 18)

    return (
        <div className="header">
            <div className="topbar" />
            <div className="insta">
                {/* {backSplash} */}
                {makeImages()}
            </div>
            <div className="lower-section">
                <p className="bartext">PHIL YOO</p>
                <div className="bottombar">
                    <p className="text">SOFTWARE ENGINEER</p>
                    <p className="text">NYC</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
