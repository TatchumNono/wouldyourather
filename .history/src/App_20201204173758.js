import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main/Main";
import MainForm from "./components/form/addQuestion";
import NotFound from "./components/NotFound/NotFound";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
     
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <ProtectedRoute
            isAuthenticated={isLoggedIn}
            path='/form'
            component={MainForm}
          />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
