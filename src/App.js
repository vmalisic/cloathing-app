import React from 'react';
import './App.css';
import './pages/homepage-styles.scss';
import HomePage from './pages/HomePage.component'
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

// const HatsPage = (props) =>{
//   console.log(props);  
//   return (
//   <div>    
//       <h1>Hats Page - {props.match.isExact && props.match.url} </h1>
//       <Link to={`${props.match.url}/12`}> Topic to Link 12</Link>
//       <Link to={`${props.match.url}/17`}> Topic to Link 17</Link>
//       <Link to={`${props.match.url}/19`}> Topic to Link 19</Link>
//       <button className="btn btn-primary" onClick = {() => props.history.goBack()}>Back page</button>
//       <p>{props.match.params.topicId}</p>
//   </div>
// )
// }

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
