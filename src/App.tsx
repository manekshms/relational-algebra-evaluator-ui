import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./app.scss";
import { store } from "./state/store";
import { About } from "./pages/about";
import { GetStarted } from "./pages/getStarted";
import { Home } from "./pages/home";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/get-started" component={GetStarted} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
