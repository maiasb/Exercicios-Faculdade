import { Link } from 'react-router-dom';

import { Gallery } from '../../Components/Carousel';
import { Destaque } from '../../Components/Destaque';

import './index.scss'

export function Home() {

    return (
        <div id="PageHome">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
            </header>
            <main>
                <div className='divTitle'>
                    <h1>MAIS LIDAS NA SEMANA</h1>
                </div>
                <Gallery />
                <div className='divTitle'>
                    <h1>POSTAGENS DIÁRIAS</h1>
                </div>
                <Destaque />
            </main>
            <footer>
                <a href="#">Termos</a>
                <a href="#">Siga-nos</a>
                <a href="#">Contate-nos</a>
                <Link to="/about">Sobre</Link>
            </footer>
        </div>
    );
}