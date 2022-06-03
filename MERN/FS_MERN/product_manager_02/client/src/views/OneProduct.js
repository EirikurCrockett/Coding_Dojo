import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductCardOne from "../components/ProductCardOne";
import axios from 'axios';

const OneProduct = (props) => {
    const [product, setProduct] = useState([]);
    const {_id} = useParams();

    useEffect(()=>{
        console.log(_id)
        axios.get(`http://localhost:8000/api/product/${_id}`)
            // .then(res => console.log(res.data))
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    } , [])


    return(
        <div className="d-flex flex-wrap">
            <ProductCardOne title={product.title} price={product.price} description={product.description}/>
        </div>
    )
}

export default OneProduct;