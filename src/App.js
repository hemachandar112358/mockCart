import { Provider } from "react-redux";
import "./App.css";
import Cart from "./Components/Cart";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ marginTop: "5%" }}>
        <div>
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
