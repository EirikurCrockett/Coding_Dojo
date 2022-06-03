import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateProductForm = (props) => {
    const history = useHistory();
    const [product, setProduct] = useState({
        title : "",
        price : 0.00,
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
        // .then(res => console.log(res.data))
            .then(res => setProduct({
                title: res.data.title,
                price: res.data.price,
                description: res.data.description
            }))
            .catch(err => console.log(err))
    },[props._id])

    

    const formChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const updateProduct = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/product/${props._id}/edit`, product)
            .then(res => history.push(`/products/${props._id}`))
            .catch(err => console.log(err))
        
        

    }

    return(
        <div className="w-75 mx-auto my-3">
            <form onSubmit={ updateProduct }>
                <div className="form-group my-2">
                    <label className="form-label">Title:</label>
                    <input className="form-control" name="title" onChange={formChange} type="text" value={product.title}/>
                </div>
                <div className="form-group my-2">
                    <label className="form-label">Price:</label>
                    <input className="form-control" name="price" onChange={formChange} type="number" step="0.01" min="0.01" value={product.price}/>
                </div>
                <div className="form-group my-2">
                    <label className="form-label">Description:</label>
                    <input className="form-control" name="description" onChange={formChange} type="text" value={product.description}/>
                </div>
                <input type="submit" value="Update" className="btn btn-success w-100 my-2"/>
            </form>
        </div>
    )
}

export default UpdateProductForm;