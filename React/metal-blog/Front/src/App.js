import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Home } from "./Pages/Home/Home.js";
import { About } from "./Pages/About/About.js"
import { Login } from "./Pages/Login/Login.js";
import { PinkFloyd } from "./Pages/Posts/PinkFloyd/PinkFloyd.js"
import { Lolla } from "./Pages/Posts/Lolla/Lolla.js"
import { RockInRio } from "./Pages/Posts/RockInRio/rockInRio.js"
import { TheStrokes } from "./Pages/Posts/TheStrokes/TheStrokes.js"
import { RadioHead } from "./Pages/Posts/RadioHead/RadioHead.js"

import { Header } from './Components/Header/Header'
import { LinkButton } from './Components/LinkButton/LinkButton'
import { Footer } from "./Components/Footer/Footer.js";

import './App.scss'

import { signIn } from './Util/signIn'

function App() {
  return (
    <BrowserRouter>
      <Header>
        <LinkButton
          to="/"
          text="Home"
        />
        <LinkButton
          to="#"
          text="Imagens"
        />
        <LinkButton
          to="/login"
          text="Login"
        />
        <LinkButton
          to="#"
          text="Cadastro"
        />
      </Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/rockInRio" component={RockInRio}></Route>
        <Route exact path="/lolla" component={Lolla}></Route>
        <Route exact path="/pinkFloyd" component={PinkFloyd}></Route>
        <Route exact path="/theStrokes" component={TheStrokes}></Route>
        <Route exact path="/radioHead" component={RadioHead}></Route>
      </Switch>
      <Footer>
        <LinkButton
          to="/#"
          text="Termos"
        />
        <LinkButton
          to="#"
          text="Siga-nos"
        />
        <LinkButton
          to="#"
          text="Contate-nos"
        />
        <LinkButton
          to="/about"
          text="Sobre"
        />
      </Footer>
    </BrowserRouter>
  );
}

export default App;
