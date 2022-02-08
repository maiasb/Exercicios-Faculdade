
// import React from 'react'
// import Carousel from 'react-grid-carousel'

// const Gallery = () => {
//     return (
//         <Carousel cols={2} rows={1} gap={10} loop>
//             <Carousel.Item>
//                 <img width="100%" src="https://picsum.photos/800/600?random=1" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img width="100%" src="https://picsum.photos/800/600?random=2" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img width="100%" src="https://picsum.photos/800/600?random=3" />
//             </Carousel.Item>
//         </Carousel>
//     )
// }

// export default Gallery;







import { Carousel } from '3d-react-carousal';
import { Link } from 'react-router-dom';

import RockInRio from '../../Contents/Img/rockPost.png'
import Lolla from '../../Contents/Img/Lolla.jpg'
import pinkFloyd from '../../Contents/Img/pinkFloyd.jpg'
import theStrokes from '../../Contents/Img/theStrokes.jpg'
import RadioHead from '../../Contents/Img/RadioHead.jpg'

import './index.scss'

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