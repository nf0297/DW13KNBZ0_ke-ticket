import React, {Component} from 'react';
import Home from './Pages/Home';
import Event from './Pages/Event';
import Category from './Pages/Category';
import HeaderHome from './Pages/HeaderHome';
import CategoryPage from './Pages/CategoryPage';
import Payment from './Pages/Payment';
import AddEvent from './Pages/AddEvent';
import MyTicket from './Pages/MyTicket';
import Login from './Pages/Login';
import ProfilePage from './Pages/Profile';
import Menu from './Pages/Menu';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/event/:id/detail" component={Event}/>
          <Route path="/header" component={HeaderHome}/>
          <Route path="/category" component={Category}/>
          <Route path="/category/:id/events" component={CategoryPage}/>
          <Route path="/event/add" component={AddEvent}/>
          <Route path="/order/add" component={Payment}/>
          <Route path="/my-ticket" component={MyTicket}/>
          <Route path="/login" component={Login}/>
          <Route path='/profile' component={ProfilePage}/>
          <Route path='/menu' component={Menu}/>
       </div>
      </Router>
    )
  };
}


export default App;
