import logo from "./logo.svg";
import "./App.css";
import { Provider } from "./redux/store";
import {store } from './'

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
