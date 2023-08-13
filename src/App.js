
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';

function App() 
{ 
  return(
    <Router>
      <div className='App'>
        <Navbar />  
        <div className='content'>
          <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/Create" element={<Create></Create>}/>
          <Route path="/blogs/:id" element={<BlogDetails></BlogDetails>}/>
          <Route path="*" element={<Notfound></Notfound>}/>
          </Routes>
      
        </div>
      </div>
      </Router>
  );

}

export default App;
