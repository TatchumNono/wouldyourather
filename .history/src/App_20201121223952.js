import { Provider } from "./redux/store";
import { store } from "./redux/store";
import Login from '.'

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
