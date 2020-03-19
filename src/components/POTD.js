import React, {useState, useEffect} from 'react';
import './POTD.css';
import axios from 'axios';
import Nav from './Nav';
import POTDInfo from './POTDInfo';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const POTD = () => {
    const [pic, setPic] = useState({})
    //const [date, setDate] = useState("mix");
    useEffect(() =>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=wngNLHYHjVOhyQrFEzPlFrZi0wyo4spTSFsWkK1H')
        .then(reponse => {
            setPic(reponse.data)
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <>
        <Nav />
        <Container>
            <img src={pic.hdurl} alt='Astrology Pic of the Day'></img>
            <POTDInfo title={pic.title} date={pic.date} text={pic.explanation}/>
        </Container>
        </>
    )
}

export default POTD;