import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./components/Login/login";
import Main from "./components/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
