import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Switch, Route, Link} from 'react-router-dom';

import Main from "./views/Main";
import FormPage from "./views/FormPage";
import AllProducts from "./views/AllProducts";
import OneProduct from "./views/OneProduct";
import UpdateFormPage from "./views/UpdateFormPage";


function App() {

  return (

    <div className="w-50 mx-auto my-2 ">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark border p-3">
        <h1 className="navbar-brand">Product Manager</h1>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/products/all">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products/create">Create Product</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/products/create">
            <FormPage/>
          </Route>
          <Route exact path="/products/all">
            <AllProducts/>
          </Route>
          <Route exact path="/products/:_id">
            <OneProduct/>
          </Route>
          <Route exact path="/products/:_id/edit">
            <UpdateFormPage/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
