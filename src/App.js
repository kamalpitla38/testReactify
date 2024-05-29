import './App.css';
import DataProductsGrid from './DataGrid'
import DataChart from './DataChart'
import { AppBar,Toolbar, Button } from '@mui/material';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit' component={Link} to="/" >Home</Button>
          <Button color='inherit' component={Link} to="/grid">Data Grid</Button>
          <Button color='inherit' component={Link} to="/chart">Chart</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/' element={<div>Sample text</div>}/>
        <Route path='/grid' element={<DataProductsGrid/>}/>
        <Route path='/chart' element={<DataChart/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;