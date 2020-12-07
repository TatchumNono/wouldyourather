import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main/Main";
import "antd/dist/antd.css";
import { BrowserRouter, Router, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Bre
      <Main />
    </Provider>
  );
}

export default App;
