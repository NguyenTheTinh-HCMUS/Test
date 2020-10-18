import React,{useEffect} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import {routeHome} from './routes'

const showMenuHome=route=>{
  if(route && route.length>0 ){
    return  route.map((item,index)=> <HomeTemplate
    key={index}
    path={item.path} 
    exact={item.exact} 
    Component={item.component} />)
  }
}
function App() {
 
  return (
    <BrowserRouter>
    <div className='App'>
     
     <Switch>
       {showMenuHome(routeHome)}
  
     </Switch>
    
   
  
   
    
   </div>
  
   </BrowserRouter>
  );
}

export default App;
