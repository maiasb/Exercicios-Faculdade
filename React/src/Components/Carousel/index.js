
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
import './index.scss'

export function Gallery() {

    let slides = [
        <a href="https://google.com">
            <h1 className='titleImage'>Fim de ano chegando, prepare-se...</h1>
            <img src="https://picsum.photos/800/300/?random" alt="0" />
        </a>,
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];

    return (
        <div id='divCarousel'>
            <Carousel id='opa' slides={slides} autoplay={false} />
        </div>
    )
}