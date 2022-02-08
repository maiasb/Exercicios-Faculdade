import { Link } from 'react-router-dom';

import { Gallery } from '../../Components/Carousel';
import { Diarias } from '../../Components/Diarias';

import './index.scss'

export function Home() {

    return (
        <div id="PageHome">
            <header>
                <Link to="/">Home</Link>
                <a href="#">Destaques</a>
                <a href="#">Diárias</a>
                <a href="#">Login</a>
            </header>
            <main>
                <div className='divTitle'>
                    <h1>MAIS LIDAS NA SEMANA</h1>
                </div>
                <Gallery />
                <div className='divTitle'>
                    <h1>POSTAGENS DIÁRIAS</h1>
                </div>
                <Diarias />
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