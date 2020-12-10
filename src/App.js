import "./App.css";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
