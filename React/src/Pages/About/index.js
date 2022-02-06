import { Link } from 'react-router-dom';

import { TextBox } from '../../Components/txtComments';

import './index.scss'

export function About() {

    return (
        <div id="PageHome">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
            </header>
            <main>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita recusandae saepe itaque molestias culpa modi amet, est fugit quidem maiores aliquid mollitia dolores consequatur molestiae id quas dolorum vitae eius.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores ex sunt facere eius tempore et nesciunt laboriosam, voluptatum a numquam vero fugiat mollitia molestias perspiciatis magni ipsum nostrum iste.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sit suscipit corrupti. Ut deleniti illum quaerat modi aliquid expedita cumque non consectetur ab tenetur, tempora voluptatum asperiores! Culpa, a accusantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe commodi voluptates soluta! Commodi placeat eligendi est sit recusandae quasi, tempore facilis minima cum molestiae quae! Esse, quia. Esse, incidunt.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, dicta, itaque maiores at non rem maxime aliquid fugit assumenda sapiente ipsa. Harum excepturi a possimus esse dolores corrupti, ducimus nemo.
                </p>
                <TextBox />
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