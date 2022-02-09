
import { Link } from 'react-router-dom';

import { DivTitle } from '../../../Components/DivTitle/DivTitle';
import { Title } from '../../../Components/Title/Title';
import { TextBox } from '../../../Components/txtComments';

import rockPost from '../../../Contents/Img/rockPost.png'
import Lolla from '../../../Contents/Img/LollaLogo.png'

import "./rockInRio.scss"

export function RockInRio() {
    return (
        <div className="divPost">
            <main>
                <div className='divMain'>
                    <div className='divPost'>
                        <DivTitle>
                            <Title
                                Text="Rock In Rio 2022"
                            />
                        </DivTitle>
                        <img src={rockPost} alt="Atrações" />
                        <div className="divTextoLolla">
                            <p>
                                O Rock in Rio é um festival de música idealizado pelo empresário brasileiro Roberto Medina pela primeira vez em 1985
                                . É reconhecido como um dos maiores festivais musicais do planeta. Foi originalmente organizado no Rio de Janeiro, de onde vem o nome.
                            </p>
                        </div>
                        <h3>Palco Mundo</h3>
                        <div className='divAtracoesRock'>
                            <div className='divItemAtracoes'>
                                <h3>02/09</h3>
                                <ul>
                                    <li>Iron Maiden</li>
                                    <li>Dream Theater</li>
                                    <li>Megadeth</li>
                                    <li>Sepultura + Orquestra Sinfônica Brasileira</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>03/09</h3>
                                <ul>
                                    <li>Post Malone</li>
                                    <li>Marshmello</li>
                                    <li>Jason Derulo</li>
                                    <li>Alok</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>04/09</h3>
                                <ul>
                                    <li>Justin Bieber</li>
                                    <li>Demi Lovato</li>
                                    <li>IZA</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>08/09</h3>
                                <ul>
                                    <li>Guns N Roses</li>
                                    <li>Maneskin</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>09/09</h3>
                                <ul>
                                    <li>Green Day</li>
                                    <li>Fall Out Boy</li>
                                    <li>Billy Idol</li>
                                    <li>Capital Inicial</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>10/09</h3>
                                <ul>
                                    <li>Coldplay</li>
                                    <li>Camila Cabello</li>
                                    <li>Bastille</li>
                                    <li>Djavan</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>11/09</h3>
                                <ul>
                                    <li>Dua Lipa</li>
                                    <li>Ivete Sangalo</li>
                                </ul>
                            </div>
                        </div>
                        <h3>Palco Sunset</h3>
                        <div className='divAtracoesRock'>
                            <div className='divItemAtracoes'>
                                <h3>08/09</h3>
                                <ul>
                                    <li>Joss Stone</li>
                                    <li>Corinne Bailey Rae</li>
                                    <li>Gloria Groove</li>
                                    <li>Duda Beat</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>09/09</h3>
                                <ul>
                                    <li>Avril Lavigne</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>10/09</h3>
                                <ul>
                                    <li>Ceelo Green</li>
                                </ul>
                            </div>
                            <div className='divItemAtracoes'>
                                <h3>11/09</h3>
                                <ul>
                                    <li>Ludmilla</li>
                                    <li>Macy Gray</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='divRelacao'>
                        <div className='itemRelacao'>
                            <Link to="/lolla">
                                <img src={Lolla} alt="Lolla" />
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