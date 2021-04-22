import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavbarLight } from './components/Nav/Navbar';
import { Home } from './Pages/Home/Home';
import { Orders } from './Pages/Orders/Orders';
import { Executors } from './Pages/Executors/Executors';
import { Auction } from './Pages/Auction/Auction';
import { About } from './Pages/About/About';
import { Auth } from './components/Auth/Auth';
import { Login } from './Pages/Login/Login';
import Register from './Pages/Register';
import { AuthProvider } from './context/authContext/auth';
import AuthRoute from './components/Auth/AuthRoute'
import { OrderRegistration } from './Pages/Orders/OrderRegistration/OrderRegistration'
import { Categories } from './Pages/Orders/Сategories/Сategories';
import { Explantion } from './Pages/Orders/Explanation/Explanation';
import { Publication } from './Pages/Orders/Publication/Publication';
// import { OrderCreatorProvider } from './context/orderCreatorContext/globalState'

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
          <Route path = "/project/create" exact component= {OrderRegistration} />
          <Route path = "/project/create/categories" component= {Categories} />
          <Route path = "/project/create/explanation" component= {Explantion} />
          <Route path = "/project/create/publication" component= {Publication} />
        </Switch>
      </div>

    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
