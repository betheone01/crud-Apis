
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <div className="container">
      <h2>Welcome to CRUD operation</h2>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
