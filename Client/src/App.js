import logo from './logo.svg';
import './App.css'; 
import Home from './component/Home';
import Menu from './component/Menu';
import Pnf from './component/Pnf'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import CRUD from './component/CRUD';
import Form from './component/Form'; 
import Edit from './component/Edit';
import Delete from './component/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route path='/' element={<Home/> }></Route>
          <Route path='/profile' element={<CRUD/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
          <Route path='/Delete/:id' element={<Delete/>}></Route>
          <Route path='*' element={<Pnf/> }></Route>
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
