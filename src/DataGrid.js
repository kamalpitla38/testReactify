import React, { useEffect, useState } from 'react'
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';
import { formatNumber } from 'chart.js/helpers';



const DataProductsGrid = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() =>{
        const fetchProducts = async() =>{
            try {
               const res = await fetch ('https://fakestoreapi.com/products'); 
               if (!res. ok){
                throw new Error('Failed not ok');
               }
               const data = await res.json();
               setProducts(data);
               console.log(data);
            } catch (error) {
                setError(error);
            } finally {

            }
        }
        fetchProducts();
    },[])

    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' },
        { key: 'description', name: 'Description' },
        { key: 'price', name: 'Price', formatter: ({row}) =>`$${row.price}`}
      ];
      
  return (
    <div>
        <DataGrid columns={columns} rows={products}/>
    </div>
  )
}

export default DataProductsGrid