
import { Link } from 'react-router-dom';
import "./index.scss"

export function SobreGatos() {
    return (
        <div id="sobreGatos">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/about">Sobre</Link>
            </header>
            <main>
                <div className='divMain'>
                    <div className='divPost'>
                        <h1>SAIBA PORQUE O SEU GATO É UM PORRA</h1>
                        <img src="https://www.premierpet.com.br/wp-content/uploads/2020/10/banner-gato-1-1.jpg" alt="gato" />
                        <p>	Lorem ipsum sollicitudin nulla viverra malesuada aliquet tincidunt, facilisis hendrerit lectus orci tempus pharetra dapibus, dictum sit mollis odio tortor lorem. nisl laoreet integer non egestas eros nec erat nunc aliquet, vivamus senectus odio donec adipiscing lorem massa amet, at odio vehicula donec litora et etiam sapien. nibh mollis purus velit ultricies quam nunc gravida, platea consectetur convallis ullamcorper suscipit. posuere ultrices eget leo ipsum est accumsan vehicula vitae sed hendrerit accumsan mollis, fermentum ligula suspendisse risus hac etiam nibh neque porta curae fames. odio vivamus faucibus aenean ut at cursus cras imperdiet, habitasse egestas aptent tristique inceptos quam amet nec integer, ligula sit rutrum inceptos ut tempus aenean.

                            Sem aliquet dapibus est posuere tortor fringilla congue, ultrices congue phasellus vestibulum vulputate consequat, platea in porttitor nisl in condimentum. donec vehicula aptent ipsum class arcu turpis ante sapien, tristique velit et id ultricies ac libero netus integer, risus imperdiet ipsum habitant metus sodales porta. nostra suscipit ornare ullamcorper posuere consectetur faucibus volutpat non potenti, vehicula augue cursus purus suscipit blandit sed dapibus bibendum placerat, ligula litora malesuada posuere aliquet class nostra dui. dolor eleifend ac suscipit cursus netus augue ante integer hendrerit netus, erat sodales ornare at arcu dui pellentesque elementum inceptos dictumst cras, convallis posuere aptent ad auctor ultricies cursus vitae ultrices.

                            Tincidunt potenti erat tempus viverra class cursus rhoncus aenean quisque donec, est rutrum quisque dapibus erat malesuada fermentum auctor sociosqu sollicitudin, nullam laoreet orci semper nullam torquent elementum velit metus. faucibus curabitur enim pharetra turpis in rhoncus imperdiet porta, facilisis magna aenean per in lacinia class, quisque vehicula quisque torquent porttitor ad etiam. quisque volutpat suscipit commodo conubia proin pharetra convallis maecenas suscipit, feugiat lacus luctus vivamus habitant leo risus vel amet, suscipit felis viverra eleifend nulla dapibus vestibulum tempor malesuada, inceptos aliquam vel ullamcorper dui porta ultricies varius. curae aptent egestas dictum sem hendrerit feugiat sapien, sollicitudin eu adipiscing est at porta donec primis, at feugiat semper tristique nostra habitant.

                            Purus quis cras platea viverra ut praesent hendrerit, semper auctor per litora tempor venenatis suspendisse volutpat, ultrices phasellus libero dui tortor velit. dolor conubia lobortis vivamus convallis nostra dictum orci aliquet consectetur, ullamcorper adipiscing aenean erat aenean sed praesent est mauris ultricies, rutrum amet eros maecenas euismod cursus per venenatis. gravida tristique rutrum primis egestas sociosqu eget dictum ligula, pretium varius maecenas convallis curae augue placerat iaculis, leo pharetra ut justo nostra dictum eu. eleifend malesuada lobortis ullamcorper malesuada in aliquam convallis urna lobortis, nec sociosqu turpis libero tortor ut luctus lobortis tristique, facilisis non cubilia sed odio sed morbi porttitor.

                            Habitasse vitae tristique cubilia vitae bibendum tempus nulla cubilia class eleifend, aptent lobortis per eu taciti tellus dictum sed integer, mattis viverra iaculis sapien adipiscing arcu donec orci consequat. lacus sociosqu pretium est ac sapien duis ultricies lobortis at consequat, nisl enim felis cras habitasse sociosqu aliquam volutpat congue, dolor phasellus etiam urna hendrerit lacus egestas elementum ultrices. lorem velit orci pellentesque phasellus ut vehicula, maecenas conubia a inceptos hendrerit, elementum felis est porttitor conubia. </p>
                    </div>
                    <div className='divRelacao'>
                        <div className='itemRelacao'>
                            <h1>Como alimentar seu gato</h1>
                            <a href="#">
                                <img src="https://www.azpetshop.com.br/blog/wp-content/uploads/2016/12/gato-comida-805x452.jpeg" alt="alimentacao" />
                            </a>
                        </div>
                        <div className='itemRelacao'>
                            <h1>Cuide da saúde do seu gato</h1>
                            <a href="#">
                                <img src="https://static1.patasdacasa.com.br/articles/3/93/3/@/4479-plano-de-saude-para-gatos-saiba-escolhe-articles_media_mobile-1.jpg" alt="saúde" />
                            </a>
                        </div>
                        <div className='itemRelacao'>
                            <h1>Memes de gatos</h1>
                            <a href="#">
                                <img src="https://rockntech.com.br/wp-content/uploads/2015/02/selfies-de-gatos_8.jpg" alt="memes" />
                            </a>
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