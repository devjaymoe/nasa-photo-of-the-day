import React, {useState, useEffect} from 'react';
import './POTD.css';
import axios from 'axios';
import Nav from './Nav';
import POTDInfo from './POTDInfo';

const POTD = () => {
    const [pic, setPic] = useState({})
    useEffect(() =>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=wngNLHYHjVOhyQrFEzPlFrZi0wyo4spTSFsWkK1H')
        .then(reponse => {
            setPic(reponse.data)
        })
        .catch(err => console.log(err));
    }, [])
    return (
        <div className="POTD-Container">
            <Nav />
            <img src={pic.hdurl} alt='Astrology Pic of the Day'></img>
            <POTDInfo title={pic.title} date={pic.date} text={pic.explanation}/>
        </div>
    )
}

export default POTD;