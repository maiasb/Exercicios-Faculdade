
import { Link } from 'react-router-dom';

import theStrokes from '../../../Contents/Img/theStrokes.jpg'
import PinkFloydImg from '../../../Contents/Img/pinkFloyd.jpg'
import RadioHeadName from '../../../Contents/Img/RadioHeadName.png'

import { DivTitle } from '../../../Components/DivTitle/DivTitle';
import { Title } from '../../../Components/Title/Title';
import { TextBox } from '../../../Components/txtComments';

import "./TheStrokes.scss"

export function TheStrokes() {
    return (
        <div className="divPost">
            <header>
                <Link to="/">Home</Link>
                <a href="#">Destaques</a>
                <a href="#">Diárias</a>
                <a href="#">Login</a>
            </header>
            <main>
                <div className='divMain'>
                    <div className='divPost'>
                        <DivTitle>
                            <Title
                                Text="THE STROKES"
                            />
                        </DivTitle>
                        <img src={theStrokes} alt="TheStrokes" />
                        <h3 className='divTitle'>Biografia</h3>
                        <div className='divTextPink'>
                            <p>
                                Há 20 anos o rock se tornou relevante pela última vez, com o lançamento de ‘Is this it’
                                . Os executivos que estavam lá para ver (e ouvir) recordam aquela cena efervescente que chegou ao mundo da moda.
                            </p>
                            <p>
                                Surgiram, aparentemente do nada, em 2001, um momento em que o rock passava por uma de seus épocas mais chatas, e lhe deram um último sopro de vida
                                . Entre 2001 e 2011, uma nova fornada de bandas guitarreiras invadiu as paradas em busca da canção perfeita de três minutos —e, de passagem, conquistaram o mundo da moda
                                , a fama e o glamour em geral. Em 31 de julho se completam 20 anos do lançamento do álbum que marcou o começo daquilo: Is this it
                                , a estreia de um quinteto de Manhattan que usava o nome de The Strokes. Eram cinco garotos de famílias acomodadas, liderados pelo vocalista Julian Casablancas
                                , filho do fundador da agência Elite. Com ele, Albert Hammond Jr, filho do famoso autor de It never rains in southern California, Nikolai Fraiture, Nick Valensi e o brasileiro Fabrizio Moretti
                                . Tinham todos cerca de 20 anos e frequentavam o Lower East Side e o East Village de Nova York.

                            </p>
                            <p>
                                Depois deles viriam muitos outros. Primeiro nos Estados Unidos: bandas novas como Interpol e Vampire Weekend. Ou veteranos que souberam pegar o bonde
                                , como The White Stripes e LCD Soundsystem. Depois no Reino Unido: The Libertines, Bloc Party, Kaiser Chiefs e Franz Ferdinand, cujo líder, Alex Kapranos
                                , expressou em uma só frase as pretensões de toda aquela cena: “Queremos fazer discos para que as garotas dancem outra vez”.
                            </p>
                            <p>
                                Visto da perspectiva atual, não parece um objetivo muito ambicioso. Hoje em dia, o som latino é a força dominante, e até os seminaristas rebolam com esses ritmos
                                , mas no começo do século a coisa era bem diferente. O final dos anos noventa foi marcado pela cena do rap metal para jovens muito machos nos Estados Unidos
                                , e por bandas de pop lânguido pós-Radiohead para a garotada melancólica do Reino Unido. “Uma era música para adolescentes, e a outra para velhos”, sentencia Mark Kitcatt
                                , diretor da Everlasting Records, o selo que lançou na Espanha o primeiro single do The Strokes. O eletrônico havia voltado às catacumbas, e o R’n’B ainda não havia erguido a cabeça
                                . A ilusão de que o rock mandava, como havia ocorrido durante 40 anos, permanecia viva. Mas o fato é que na época, uma década depois da chegada do grunge, não havia nada de excitante no horizonte
                                , e se houvesse não seria exatamente em Manhattan, que desde os gloriosos tempos do punk e da new wave havia perdido peso. “Entre 1994 e 1999, quando você pensa em grupos saídos de Nova York
                                , só lhe ocorrem grupos de hardcore”, diz a jornalista Jenny Eliscu.
                            </p>
                            <p>
                                A cidade despertava tão poucas esperanças que o The Strokes só seria descoberto a 5.567 quilômetros de lá, no escritório londrino da Rough Trade
                                , o selo independente criado por Geoff Travis e Jeanette Lee que nos anos oitenta havia contratado os Smiths. Quem conta isso, da capital britânica
                                , é James Endeacott, que na época trabalhava como diretor artístico da gravadora: “A música era muito chata na época, nada de interessante acontecia no rock
                                . Só bandas norte-americanas de adultos com cavanhaques e shorts, que faziam rap-rock. Em Nova York havia uma casa de shows, a Mercury Lounge, e conhecíamos um promotor de lá. Dissemos a ele
                                : ‘Se em algum momento acontecer alguma coisa, qualquer coisa, medianamente interessante, nos avise’. Uma segunda-feira pela manhã, em dezembro de 2000, entrei nos escritórios da Rough Trade
                                . Eram nove horas, mas Geoff estava muito contente. ‘James, James, venha ao meu escritório, corra’. Nosso contato em Nova York havia lhe mandado uma gravação com três músicas
                                . A primeira era The modern age, depois tocaram Last nite e Barely legal. Quando aqueles 10 minutos terminaram, estávamos os dois aos pulos. Era isso que estávamos procurando”. Eram os Strokes.
                            </p>
                        </div>
                        <a href="http://encurtador.com.br/fsvVY" target="_blank">Continuar leitura...</a>
                        <div>

                            <DivTitle>
                                <Title
                                    Text="Comente"
                                />
                            </DivTitle>

                            <TextBox />
                        </div>
                    </div>
                    <div className='divRelacao'>
                        <h3>Pesquisas relacionadas</h3>
                        <div className='itemRelacao'>
                            <Link to="/pinkFloyd">
                                <img src={PinkFloydImg} alt="PinkFloyd" />
                            </Link>
                        </div>
                        <div className='itemRelacao'>
                            <Link to="/radioHead">
                                <img src={RadioHeadName} alt="RadioHead" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <a href="#">Termos</a>
                <a href="#">Siga-nos</a>
                <a href="#">Contate-nos</a>
                <Link to="/about">Sobre</Link>
            </footer>
        </div>
    )
}