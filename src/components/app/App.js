// import logo from './logo.svg';
import './App.css';
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from '../header/header'; 
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import Songs from '../songs/songs';
import Artists from '../songs/artists';
import Addsong from '../songs/addsong';
// import {Routes} from 'react-router';




function App() {
  return (
    <div className="App">
     
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Songs/>}></Route>
          <Route path='/artists' element={<Artists/>}></Route>
          <Route path='/addsong' element={<Addsong/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
