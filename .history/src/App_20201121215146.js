import logo from "./logo.svg";
import "./App.css";
import { Provider } from "./redux/store";

function App() {
  return (
    <Provider store>
      <div></div>
    </Provider>
  );
}

export default App;
