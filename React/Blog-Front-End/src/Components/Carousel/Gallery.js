
import { Carousel } from '3d-react-carousal';
import { Link } from 'react-router-dom';

import './Gallery.scss'

import RockInRio from '../../Contents/Img/rockPost.png'
import Lolla from '../../Contents/Img/Lolla.jpg'
import pinkFloyd from '../../Contents/Img/pinkFloyd.jpg'
import theStrokes from '../../Contents/Img/theStrokes.jpg'
import RadioHead from '../../Contents/Img/RadioHead.jpg'


export function Gallery() {

    let slides = [
        <Link to="/rockInRio">
            <h1 className='titleImage branco'>Veja sobre o evento</h1>
            <img src={RockInRio} alt="0" />
        </Link>,
        <Link to="/lolla">
            <h1 className='titleImage branco'>Veja sobre o evento</h1>
            <img src={Lolla} alt="1" />
        </Link>,
        <Link to="/pinkFloyd">
            <h1 className='titleImage preto'>Biografia de Pink Floyd</h1>
            <img src={pinkFloyd} alt="2" />
        </Link>,
        <Link to="/theStrokes">
            <h1 className='titleImage branco'>Biografia de The Strokes</h1>
            <img src={theStrokes} alt="3" />
        </Link>,
        <Link to="/radioHead">
            <h1 className='titleImage branco'>Biografia de RadioHead</h1>
            <img src={RadioHead} alt="4" />
        </Link>,];

    return (
        <div id='divCarousel'>
            <Carousel id='opa' slides={slides} autoplay={false} />
        </div>
    )
}