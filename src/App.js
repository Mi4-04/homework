import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './Pages/Home';
import { Orders } from './Pages/orders';
import { Executors } from './Pages/Executors';
import { Auction } from './Pages/Auction';
import { About } from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="container pt-4 ">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/orders" component={Orders} />

          <Route path="/orders/:info" component={Orders} />
          <Route path="/executors" component={Executors} />
          <Route path="/executors/:id" component={Executors} />
          <Route path="/auction" component={Auction} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
