import logo from "./logo.svg";
import "./App.css";
import { Provider } from "./redux/store";

function App() {
  return (
    <Provider store={st}>
      <div></div>
    </Provider>
  );
}

export default App;
