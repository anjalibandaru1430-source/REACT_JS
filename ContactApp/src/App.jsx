import Navbar from "./Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import ContactApp from './contactapp/ContactApp';
import ContactList from "./contactapp/ContactList";
let App = ()=>{

  return <div>
            <Router>
              <Navbar/>
              <Routes>
                  <Route path="/index" element={<Home/>}/>
                  <Route path="/contact" element={<ContactApp/>}/>
              </Routes>
            </Router>   
        </div>
}
export default App;