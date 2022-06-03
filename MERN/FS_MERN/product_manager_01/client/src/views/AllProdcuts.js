import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/all')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    } , [])


    return(
        <div className="d-flex flex-wrap">
            {
                products.map((item, i) => 
                    <ProductCard key={i} title={item.title} price={item.price} description={item.description} />
                )
            }
        </div>
    )
}

export default AllProducts;