import React from 'react';

import './styles/header.css';

const Header = ({ images }) => {
    const makeImages = () => {
        if (images.length) {
            return images.slice(0,18).map((data, idx) => (
                <div className="imgcontainer" key={idx}>
                  <img className="image" src={data.media_url} alt="" />
                </div>
            ))
        } else {
            return [
                <div className="noimg" key="1" />,
                <div className="noimg" key="2" />,
                <div className="noimg" key="3" />,
            ]
        }
    }

    return (
        <section className="header">
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
        </section>
    )
}

export default Header;
