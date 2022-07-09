import React, { useEffect, useState } from 'react';

import './header.css';

const Header = ({ images }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const makeImages = () => images.map(data => (
        <div className="imgcontainer" >
          <img className="image" src={data.media_url} alt="" />
        </div>
    )).slice(0, 18)

    const backSplash = (images || []).map((data, index) => {
        if(index < 18) {
            return (
                <div className="imgcontainer" >
                    <img className="image" src={data.media_url} alt="" />
                </div>
            )
        }
        return '';
    })

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
