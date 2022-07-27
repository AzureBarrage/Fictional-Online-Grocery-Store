import './App.css';
import stores from './data/stores';
import items from './data/items';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navigation from './components/nav.js';

import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StoresPage';

function App() {  

  return (
    <div className="App">
      <Router>
      <header>
        <h1>JPM Global</h1>
        <h2>JPM Global provides only the highest quality products, sourced from all natural materials around the world.</h2>
        <p>
         Use the tabs below to navigate the site, find your nearest location, or place an order online by adding items to your cart!
        </p>
        </header>
        <Navigation/>
        <main>
          <article>
            <Route path="/(|index.html)" exact><HomePage /></Route>
            <Route path="/order"><OrderPage items={items} /></Route>
            <Route path="/stores"><StoresPage stores={stores} /></Route>
          </article>
        </main>
        <footer>
          <p> Modified on 7/24/2022 <cite>&copy; 2022 Julian MacLeod</cite>. </p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
