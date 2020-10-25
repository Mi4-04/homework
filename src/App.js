import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavbarLight } from './components/Nav/Navbar';
import { Home } from './Pages/Home/Home';
import { Orders } from './Pages/Orders/orders';
import { Executors } from './Pages/Executors/Executors';
import { Auction } from './Pages/Auction/Auction';
import { About } from './Pages/About/About';
import { Auth } from './components/Auth/Auth';
import { Login } from './Pages/Login/Login';
import Register from './Pages/Register';
import { AuthProvider } from './context/auth';
import AuthRoute from './components/Auth/AuthRoute'

function App() {
  
  return (
  <AuthProvider>
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
          <AuthRoute path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
       
        </Switch>
      </div>
      
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
