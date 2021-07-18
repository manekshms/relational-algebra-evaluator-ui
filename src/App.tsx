import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.scss";
import { About } from "./pages/about";
import { GetStarted } from "./pages/getStarted";
import { Home } from "./pages/home";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/get-started" component={GetStarted} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
