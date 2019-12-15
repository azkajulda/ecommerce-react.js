// Default
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

// Extension
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Components
import Landing_page_user from './view/user/landing_page_user/Landing_page_user';
import Books from './view/user/books/Books';
import Cart from './view/user/cart/Cart';
import Book_detail from './view/user/book_detail/Book_detail';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Landing_page_user} />
          <Route path='/books' component={Books} />
          <Route path='/cart' component={Cart} />
          <Route path='/book_detail' component={Book_detail} />
      </Switch>
    </Router>
  );
}

export default App;
