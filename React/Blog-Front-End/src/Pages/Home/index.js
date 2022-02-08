import { Link } from 'react-router-dom';

import { DivTitle } from '../../Components/DivTitle/DivTitle';
import { Title } from '../../Components/Title/Title';
import { Gallery } from '../../Components/Carousel/Gallery';
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
                <DivTitle>
                    <Title
                        Text="DESTAQUES"
                    />
                </DivTitle>

                <Gallery />

                <DivTitle>
                    <Title
                        Text="POSTAGENS DIÁRIAS"
                    />
                </DivTitle>
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