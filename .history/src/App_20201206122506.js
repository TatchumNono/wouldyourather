import { Provider } from "react-redux";
import { store } from "./redux/store";
import "antd/dist/antd.css";
import Route


//import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      
    </Provider>
  );
}

export default App;
