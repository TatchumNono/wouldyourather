import { Provider } from "react-redux";
import { store } from "./redux/store";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/form' component={MainForm} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
