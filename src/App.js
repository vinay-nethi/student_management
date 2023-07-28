
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent';
import DisplayStudent from './Components/DisplayStudent';
import EditStudent from './Components/EditStudent';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/add' element={<AddStudent/>}/>
        <Route path='/' element={<DisplayStudent/>}/>
        <Route path='/edit/:id' element={<EditStudent/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
