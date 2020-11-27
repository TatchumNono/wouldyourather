
import "./App.css";
import { Provider } from "./redux/store";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
