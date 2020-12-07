import { Provider } from "react-redux";
import { store } from "./redux/store";
import "antd/dist/antd.css";
import Routes from "./Routes";

//import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
