
import { Link } from 'react-router-dom';

import RadioHeadIntegrantes from '../../../Contents/Img/RadioHead.jpg'
import PinkFloydImg from '../../../Contents/Img/pinkFloyd.jpg'
import theStrokesLogo from '../../../Contents/Img/theStrokesLogo.png'

import { DivTitle } from '../../../Components/DivTitle/DivTitle';
import { Title } from '../../../Components/Title/Title';
import { TextBox } from '../../../Components/TextBox/TextBox';

import "./RadioHead.scss"

export function RadioHead() {
    return (
        <div className="divPost">
            <main>
                <div className='divMain'>
                    <div className='divPost'>
                        <DivTitle>
                            <Title
                                Text="RadioHead"
                            />
                        </DivTitle>
                        <img src={RadioHeadIntegrantes} alt="RadioHead" />
                        <h3 className='divTitle'>Biografia</h3>
                        <div className='divTextPink'>
                            <p>
                                Radiohead é uma banda britânica de rock alternativo, formada no ano de 1985 em Oxford por Thom Yorke, Jonny Greenwood
                                , Ed O'Brien, Colin Greenwood e Phil Selway.
                            </p>
                            <p>
                                Seu primeiro single, "Creep", foi lançado no ano de 1992 e o seu primeiro álbum de estúdio, Pablo Honey, em 1993. Ainda que o single de "Creep" não tivesse feito sucesso quando foi lançado
                                , seu relançamento, no ano seguinte, fez da canção um hit internacional. A popularidade da banda no Reino Unido aumentou com o lançamento de seu segundo álbum de estúdio, The Bends, em 1995
                                . A textura atmosférica das guitarras e o falsete de Thom Yorke foram bastante aclamados por críticos e fãs. Com o lançamento de OK Computer em 1997, Radiohead ganhou fama mundial
                                . Contando com um som bastante expansivo e temas sobre a alienação moderna, OK Computer é aclamado até hoje como um marco dos anos 90.
                            </p>
                            <p>
                                O lançamento de Kid A, em 2000, e de Amnesiac, em 2001, marcou o pico da popularidade dos Radiohead, ainda que estes dois álbuns tenham tido opiniões controversas entre críticos e fãs
                                . Este período marcou uma considerável mudança no som do Radiohead, com a banda incorporando elementos experimentais de música eletrônica e jazz nas suas composições. Hail to the Thief (2003)
                                , sexto álbum de estúdio da banda, mesclou todos os estilos que a banda já empregou em sua carreira, como as guitarras distorcidas, música eletrônica e letras contemporâneas
                                . Dando sequência ao lançamento de Hail to the Thief, Radiohead entrou em hiato, saindo de sua gravadora EMI e lançando o seu sétimo álbum, In Rainbows, em 2007, por meio de download digital
                                , pelo qual os compradores escolhiam quanto queriam pagar. Em 2011 lançaram o oitavo álbum, The King of Limbs. O seu nono álbum foi lançado dia 8 de Maio de 2016 com o título A Moon Shaped Pool.
                            </p>
                            <p>
                                Até 2011, Radiohead já tinha vendido mais de 30 milhões de álbuns pelo mundo. Seu trabalho é listado como algumas das melhores músicas das décadas de 1990 e 2000, segundo listas de fãs e especialistas.
                            </p>
                        </div>
                        <a href="http://encurtador.com.br/fkQX4" target="_blank">Continuar leitura...</a>
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
                                <img src={PinkFloydImg} alt="pinkFloyd" />
                            </Link>
                        </div>
                        <div className='itemRelacao'>
                            <Link to="/theStrokes">
                                <img src={theStrokesLogo} alt="theStrokes" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}