import React, {Component} from 'react';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Sport from './Component/Sport';
import Shop from './Component/Shop';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
const products = [
  {
    Name : 'basket',
    Category : 'clothes',
    Price : '100 TND'
  },

  {
    Name : 'Trousers',
    Category : 'clothes',
    Price : '70 TND'
  },

  {
    Name : 'Watch',
    Category : 'Electronic',
    Price : '250 TND'
  },

  {
    Name : 'Ipad',
    Category : 'Electronic',
    Price : '1000 TND'
  }
];
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
        <Nav />
        <Shop products={products}/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Sport" component={Sport} />
        <Route path="/Shop" component= {Shop} />
        </Switch>
    </div>

    </BrowserRouter>

  );
}



export default App;
