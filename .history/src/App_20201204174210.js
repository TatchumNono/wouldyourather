import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main/Main";
import MainForm from "./components/form/addQuestion";
import NotFound from "./components/NotFound/NotFound";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
