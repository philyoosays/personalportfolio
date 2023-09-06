import {useEffect, useState} from 'react';
import axios from 'axios';
import nycSkyline from '../assets/nyc-skyline.jpg'
// import { useLocation } from 'react-router-dom';
// import analytics from '../utils/analytics';

import './styles/header.scss';

export namespace Type {
    export interface InstaImg {
        id: number;
        media_type: string;
        media_url: string;
        permalink: string;
    }
    export interface Props {

    }
}

const Header = (props: Type.Props) => {
    const [images, setImages] = useState<Type.InstaImg[]>([]);
    // const location = useLocation();
    const fetchAndSetInstagram = async () => {
        let data;
        try {
            const debugFlag = localStorage.getItem('USE_STORAGE');
            if (debugFlag) {
                // console.log('in debug flag')
                const data = localStorage.getItem('insta-imgs');
                return JSON.parse(data || '[]');
            } else {
                // console.log(process.env.REACT_APP_INSTA_ACCESS_TOKEN)
                const res = await axios.get(`https://graph.instagram.com/v14.0/${process.env.REACT_APP_INSTA_USER_ID}/media`, {
                    params: {
                        access_token: process.env.REACT_APP_INSTA_ACCESS_TOKEN,
                        fields: 'permalink,media_type,media_url'
                    }
                });
                data = res.data.data.slice(0, 18);
                // console.log('data', data)
                const debugFlag = localStorage.getItem('STORE_DATA');
                if (debugFlag) localStorage.setItem('insta-imgs', data);
                // console.log('stored data', debugFlag)
            }
        } catch (err) {
            console.error(err);
            // analytics.event(location, { details: 'Instagram fetch fail', flags: ['error'], payload: err });
        }
        return data;
    }

    const makeImages = () => {
        if (images && images.length) {
            return images.slice(0,18).map((data, idx) => (
                <div className="imgcontainer" key={idx}>
                    {
                        data.media_url
                        ? <img className="image" src={data.media_url} alt="" />
                        : <div className="noimg" />
                    }
                  {/* <img className={data.media_url ? "image" : 'noimg'} src={data.media_url || '_blank'} alt="" /> */}
                </div>
            ))
        } else {
            return (
                <div className="image">
                    <img
                        className="image"
                        src={nycSkyline}
                        style={{ opacity: 1 }}
                        alt="nyc-skyline"
                    />
                </div>
            )
        }
    }

    useEffect(() => {
        if (!images || !images.length) {
            fetchAndSetInstagram().then(setImages)
        }
    })

    return (
        <section className="header">
            <div className="topbar" />
            <div className="insta">
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
