import { Link } from 'react-router-dom';

import { Gallery } from '../../Components/Carousel';
import { Destaque } from '../../Components/Destaque';

import './index.scss'

export function Home() {

    return (
        <div id="PageHome">
            <header>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
            </header>
            <main>
                <Gallery />
                <Destaque />
            </main>
            <footer>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
                <Link to="#">Contate-nos</Link>
                <Link to="/about">Sobre</Link>
            </footer>
        </div>
    );
}