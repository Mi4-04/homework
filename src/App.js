import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavbarLight } from './components/Navbar';
import { Home } from './Pages/Home';
import { Orders } from './Pages/orders';
import { Executors } from './Pages/Executors';
import { Auction } from './Pages/Auction';
import { About } from './Pages/About';
import { Auth } from './components/Auth';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="container pt-4 ">
        <NavbarLight />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/orders" component={Orders} />
          <Route path="/executors" component={Executors} />
          <Route path="/executors/:id" component={Executors} />
          <Route path="/auction" component={Auction} />
          <Route path="/about" component={About} />
          <Route path="/auth" component={Auth} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
