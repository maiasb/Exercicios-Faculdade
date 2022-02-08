import { Link } from 'react-router-dom';

import { TextBox } from '../../Components/txtComments';

import './index.scss'

export function About() {

    return (
        <div id="PageAbout">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">Destaques</Link>
                <Link to="/about">Diárias</Link>
                <Link to="/about">Login</Link>
            </header>
            <main>
                <h1 className='divTitle'>Sobre nós</h1>
                <h3>
                    Motivações
                </h3>
                <p>
                    Como resultado da primeira avaliação da disciplina <strong>Programação Avançada de Computadores</strong>
                    , este site foi desenvolvido por <a href="mailto:caio.maiasb@gmail.com"><strong>Caio Maia</strong></a> e <a href="mailto:eric.mescouto@castanhal.ufpa.br"><strong>Eric Mescouto</strong></a>.
                </p>
                <h3>
                    Tecnologias
                </h3>
                <p>
                    Este site foi desenvolvido inteiramente em <a href="https://pt-br.reactjs.org/" target="_blank"><strong>React.js</strong></a>
                    , biblioteca JavaScript para front-end, com bibliotecas adicionais como <a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank"><strong>react-router-dom</strong></a>
                    , <a href="https://www.npmjs.com/package/3d-react-carousal" target="_blank"><strong>3d-react-carousal</strong></a> e <a href="https://github.com/sass/node-sass" target="_blank"><strong>node-sass</strong></a>.
                </p>
                <h3>
                    Intuito
                </h3>
                <p>
                    Buscamos entregar notícias diárias sobre o mundo do rock e eventos que ainda é possível se ouvir uma boa música (Mesmo nesses casos o rock está ameaçado)
                    , visando atualizar os bons ouvintes sobre tais conteúdos, como novos albuns lançados por sua banda favorita ou mesmo curiosidades sobre aquelas clássicas que não cansamos de ouvir.
                </p>
                <h1 className='divTitle'>Nos dê sua opinião</h1>
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