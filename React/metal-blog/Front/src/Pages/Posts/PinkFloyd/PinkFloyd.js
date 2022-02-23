
import { Link } from 'react-router-dom';

import PinkFloydImg from '../../../Contents/Img/pinkFloyd.jpg'
import theStrokesLogo from '../../../Contents/Img/theStrokesLogo.png'
import RadioHeadName from '../../../Contents/Img/RadioHeadName.png'

import { DivTitle } from '../../../Components/DivTitle/DivTitle';
import { Title } from '../../../Components/Title/Title';
import { TextBox } from '../../../Components/TextBox/TextBox';

import "./PinkFloyd.scss"

export function PinkFloyd() {
    return (
        <div className="divPost">
            <main>
                <div className='divMain'>
                    <div className='divPost'>
                        <DivTitle>
                            <Title
                                Text="PINK FLOYD"
                            />
                        </DivTitle>
                        <img src={PinkFloydImg} alt="PinkFloyd" />
                        <h3 className='divTitle'>Biografia</h3>
                        <div className='divTextPink'>
                            <p>
                                No final da década de 60, o rock'n'roll, como a música em geral, viria a se confrontar com algo novo
                                , inusitado, e que seria responsável pela criação de um universo musical totalmente diferente dos já existentes
                                . O responsável por tal feito é o Pink Floyd, uma das principais bandas do planeta. A psicodelia
                                , o experimentalismo e os mega-shows são marcas desta banda, que transformou o modo de "fazer" rock e marcou uma nova era na música
                                , com o rock progressivo.
                            </p>
                            <p>
                                A história do Pink Floyd iniciou-se no ano de 1965. Rick Wright, Roger Waters e Nick Mason estudavam arquitetura na Universidade Cambridge
                                , em Londres, e resolveram formar uma banda e se aventurar em pequenos shows em pubs (espécie de bar) londrinos
                                . O trio foi batizado de Sigma 6 e seu repertório inicial contava com covers de blues e folk.
                            </p>
                            <p>
                                Pouco depois, eles resolvem aumentar o contigente de integrantes e Waters apresenta dois amigos da faculdade
                                , Roger Keith (Syd Barret) e David Gilmour. Com um novo grupo formado, os músicos resolvem mudar o nome da banda para The Screaming Abdabds
                                , a palpite de Barret. Houve outros nomes como só Abdabs e T-Set, antes de chegarem ao Pink Floyd, que nada mais é do que a junção dos nomes de dois bluesmen
                                , Pink Anderson e Floyd Council, de quem Syd Barret era fã.
                            </p>
                            <p>
                                David Gilmour resolve abandonar o grupo e ir para a França, estabelecendo-se a partir da­ a seguinte formação do Pink Floyd: Roger Waters no baixo e vocais
                                , Syd Barret na guitarra e vocais, Rick Wright, teclado e vocais e Nick Manson na bateria. O grupo estava se apresentado em pequenos festivais que aconteciam em Londres.
                            </p>
                            <p>
                                A grande sacada do Pink Floyd foi o uso de slides em suas apresentações. Durante o show, slides diversos eram projetados sobre todo o palco
                                , uma iniciativa totalmente inovadora e que viria a ser adotada por diversas outras bandas, posteriormente. Syd Barret, que além de músico também era pintor
                                , foi um dos principais responsáveis pelo projeto. O quarteto começava a ganhar maior visibilidade no cenário musical londrino e logo foram convidados a gravar alguns singles
                                , que foram divulgados nas rádios. Mas a grande oportunidade veio com a contratação da banda pela gravadora EMI, que os levou para gravar no mà­tico estúdio Abbey Road.
                            </p>
                        </div>
                        <a href="http://encurtador.com.br/exAHQ" target="_blank">Continuar leitura...</a>
                        <div>

                            <DivTitle>
                                <Title
                                    Text="Comente"
                                />
                            </DivTitle>

                            <TextBox
                                page='pinkFloyd'
                            />
                        </div>
                    </div>
                    <div className='divRelacao'>
                        <h3>Pesquisas relacionadas</h3>
                        <div className='itemRelacao'>
                            <Link to="/theStrokes">
                                <img src={theStrokesLogo} alt="theStrokes" />
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
        </div>
    )
}