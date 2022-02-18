
import { Link } from 'react-router-dom';

import { DivTitle } from '../../../Components/DivTitle/DivTitle';
import { Title } from '../../../Components/Title/Title';
import { TextBox } from '../../../Components/TextBox/TextBox';

import LollaAtracoes from '../../../Contents/Img/Lolla.jpg'
import RockInRio from '../../../Contents/Img/RockInRio.png'

import "./Lolla.scss"

export function Lolla() {
    return (
        <div className="divPost">
            <main>
                <div className='divMain'>
                    <div className='divPost'>
                        <DivTitle>
                            <Title
                                Text="Lollapalooza 2022: Programação tem Foo Fighters, Strokes, Miley Cyrus, A$AP Rocky e Martin Garrix"
                            />
                        </DivTitle>
                        <img src={LollaAtracoes} alt="Atrações" />
                        <div className="divTextoLolla">
                            <p>
                                Foo Fighters, Strokes, Miley Cyrus, A$AP Rocky, Martin Garrix, Pabllo Vittar e Emicida são as principais atrações do Lollapalooza 2022.
                            </p>
                            <p>
                                O festival acontece nos dias 25, 26 e 27 de março de 2022, no Autódromo de Interlagos, em São Paulo.
                            </p>
                            <p>
                                Os ingressos comprados para a nona edição, antes marcada para abril de 2020, continuam válidos. O festival foi remarcado três vezes por conta da Covid-19. Desde 2012, ele acontece em São Paulo em março ou abril.
                            </p>
                        </div>
                        <div className='divAtracoes'>
                            <div className='divItemAtracoes'>
                                <h3>25 de março, sexta-feira</h3>
                                <ul>
                                    <li>The Strokes</li>
                                    <li>Doja Cat</li>
                                    <li>Machine Gun Kelly</li>
                                    <li>Alan Walker</li>
                                    <li>Chris Lake</li>
                                    <li>Jack Harlow</li>
                                    <li>LP</li>
                                    <li>Marina</li>
                                    <li>Turnstile</li>
                                    <li>Caribou</li>
                                    <li>The Wombats</li>
                                    <li>Pabllo Vittar</li>
                                    <li>Ashnikko</li>
                                    <li>Matuê</li>
                                    <li>070 Shake</li>
                                    <li>Jetlag</li>
                                    <li>VINNE</li>
                                    <li>jxdn</li>
                                    <li>Beowülf</li>
                                    <li>Detonautas</li>
                                    <li>Edgar</li>
                                    <li>Meca</li>
                                    <li>Barja</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>26 de março, sábado</h3>
                                <ul>
                                    <li>Miley Cyrus</li>
                                    <li>A$AP Rocky</li>
                                    <li>A Day To Remember</li>
                                    <li>Alok</li>
                                    <li>Alexisonfire</li>
                                    <li>Alessia Cara</li>
                                    <li>Deorro</li>
                                    <li>Emicida</li>
                                    <li>King Gizzard And the Lizard Wizard</li>
                                    <li>Remi Wolf</li>
                                    <li>Silva</li>
                                    <li>Jão</li>
                                    <li>Boombox Cartel</li>
                                    <li>Chemical Surf</li>
                                    <li>Terno Rei</li>
                                    <li>DJ Marky</li>
                                    <li>Victor Lou</li>
                                    <li>Clarice Falcão</li>
                                    <li>Jup do Bairro</li>
                                    <li>MC Tha</li>
                                    <li>Ashibah</li>
                                    <li>Fatnotronic</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>27 de março, domingo</h3>
                                <ul>
                                    <li>Foo Fighters</li>
                                    <li>Martin Garrix</li>
                                    <li>Alesso</li>
                                    <li>Jane's Addiction</li>
                                    <li>Black Pumas</li>
                                    <li>Kaytranada</li>
                                    <li>Phoebe Bridgers</li>
                                    <li>Idles</li>
                                    <li>Kehlani</li>
                                    <li>Goldfish</li>
                                    <li>Gloria Groove</li>
                                    <li>Djonga</li>
                                    <li>Cat Dealers</li>
                                    <li>Rashid</li>
                                    <li>Fresno</li>
                                    <li>Evokings</li>
                                    <li>Planta E Raiz</li>
                                    <li>Lagum</li>
                                    <li>Fancying</li>
                                    <li>MALIFOO</li>
                                    <li>menores atos</li>
                                    <li>FractaLL x Rocksted</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='divRelacao'>
                        <div className='itemRelacao'>
                            <Link to="/rockInRio">
                                <img src={RockInRio} alt="RockInRio" />
                            </Link>
                        </div>
                    </div>
                </div>

                <DivTitle>
                    <Title
                        Text="Comente"
                    />
                </DivTitle>

                <TextBox />
            </main>
        </div>
    )
}