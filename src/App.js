import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Product from "./views/product";
import ProductDetail from "./views/productDetail";

function App() {
  return (
    <div className="App">
      <h1>Shootie</h1>
      <Switch>
        <Route path="/product-detail/:id">
          <ProductDetail />
        </Route>
        <Route path="/">
          <Product />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
