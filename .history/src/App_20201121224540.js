import { Provider } from "redux-";
import { store } from "./redux/store";
import Login from "./components/Login/login";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
