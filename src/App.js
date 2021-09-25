import './assets/css/style.css'

import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history'

import {Home, ListUser, User, CreateUser, ListProduct, Product, CreateProduct} from './pages';

function App() {
  const history = createBrowserHistory({
    baseUrl: process.env.PUBLIC_URL
  })

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users" component={ListUser}></Route>
          <Route exact path="/users/detail/:id" component={User}></Route>
          <Route exact path="/users/create" component={CreateUser}></Route>
          <Route exact path="/products" component={ListProduct}></Route>
          <Route exact path="/products/detail/:id" component={Product}></Route>
          <Route exact path="/products/create" component={CreateProduct}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
