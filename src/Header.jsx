import React, { useEffect, useState } from 'react';
import { useArray } from 'yoo-lib/dist/hooks';
import axios from 'axios';

const Header = props => {
    const [images, setImages, imgUtils] = useArray([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getImages = async () => {
        const res = await axios.get(`https://graph.instagram.com/v14.0/${process.env.REACT_APP_INSTA_USER_ID}/media`, {
            params: {
                access_token: process.env.REACT_APP_INSTA_ACCESS_TOKEN,
                fields: 'permalink',
            },
        });
        const data = res.data.data;
        imgUtils.addMany(data);
    }

    const makeImages = () => images.map(data => (
        <div className="imgcontainer" >
          <img className="image" src={data.permalink} alt="" />
        </div>
    ))

    useEffect(async () => {
        imgUtils.clear();
        if (!isLoaded) {
            getImages();
            setIsLoaded();
        }
    })

    return 
}
