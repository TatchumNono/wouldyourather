import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main/Main";
import "antd/dist/antd.css";
import {Br}

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
