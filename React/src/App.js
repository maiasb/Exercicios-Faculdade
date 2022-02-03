import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Home } from "./Pages/Home/index.js";
import { About } from "./Pages/About/index.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
