import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import 'react-data-grid/lib/styles.css';
import { useState, useEffect } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

let columns = [];

let rows = [];

function extractColRows(data){
   columns = Object.keys(data[0]);
   rows = data;
   console.log(columns);
   console.log(columns)
}

function App() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductsData(data);
        extractColRows(data)
      });
  }, []);
  return (
    <div className="App">
      {/* <DataGrid columns={columns} rows={rows} />; */}
      {/* {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))} */}
    </div>
  );
}

export default App;




[{
  "key":columns[0],
  "name":columns[0]

},{
  "key":columns[1],
  "name":columns[1]

}]