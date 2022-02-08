import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Home } from "./Pages/Home/index.js";
import { About } from "./Pages/About/index.js"
import { PinkFloyd } from "./Pages/Posts/PinkFloyd/PinkFloyd.js"
import { Lolla } from "./Pages/Posts/Lolla/Lolla.js"
import { RockInRio } from "./Pages/Posts/RockInRio/rockInRio.js"
import { TheStrokes } from "./Pages/Posts/TheStrokes/TheStrokes.js"
import { RadioHead } from "./Pages/Posts/RadioHead/RadioHead.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rockInRio" component={RockInRio}></Route>
        <Route exact path="/lolla" component={Lolla}></Route>
        <Route exact path="/pinkFloyd" component={PinkFloyd}></Route>
        <Route exact path="/theStrokes" component={TheStrokes}></Route>
        <Route exact path="/radioHead" component={RadioHead}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
