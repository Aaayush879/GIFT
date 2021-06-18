import logo from './logo.svg';
import './App.css';
import log from './log.jpg'; 
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link
} from 'react-router-dom';
import Layout from './component/Layout';
import BootstrapCarouselComponent from './BootstrapCarouselComponent';
import Family from './component/page/Family';
import Hyderabad from './component/page/Hyderabad';
import Pune from './component/page/Pune';



function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Layout>
          <div>
            <Route exact path="/"><BootstrapCarouselComponent style={{height:'70%' , width:'70%'}}/></Route> 
            <Route exact path="/family"><Family/></Route>        
            <Route exact path="/Hyderabad"><Hyderabad /></Route>     
            <Route exact path="/Pune"><Pune /></Route>    
            
            
            </div>    

          </Layout>

        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
