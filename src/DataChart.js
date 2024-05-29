import React, { useEffect, useState } from 'react'

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js"; 

ChartJS.register(Tooltip, Legend);

const DataChart = () => {

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

    const chartData = {
        lables: products.map(product => product.title),
        datasets: [{
            
        }]

    }

  return (
    <div>DataChart</div>
  )
}

export default DataChart