import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./components/Login/login";
import Main from './components/'

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
