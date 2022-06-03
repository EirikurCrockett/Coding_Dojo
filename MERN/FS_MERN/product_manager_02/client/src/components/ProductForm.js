import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [prod, setProd] = useState({
        title : "",
        price : 0.00,
        description: ""
    })

    const formChange = (e) => {
        setProd({
            ...prod,
            [e.target.name]: e.target.value
        })
    }

    const createProduct = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product/new', prod)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
            setProd({
                title : "",
                price : 0.00,
                description: ""
            })
    }

    return(
        <div className="w-75 mx-auto my-3">
            <form onSubmit={ createProduct }>
                <div className="form-group my-2">
                    <label className="form-label">Title:</label>
                    <input className="form-control" name="title" onChange={formChange} type="text" value={prod.title}/>
                </div>
                <div className="form-group my-2">
                    <label className="form-label">Price:</label>
                    <input className="form-control" name="price" onChange={formChange} type="number" step="0.01" min="0.01" value={prod.price}/>
                </div>
                <div className="form-group my-2">
                    <label className="form-label">Description:</label>
                    <input className="form-control" name="description" onChange={formChange} type="text" value={prod.description}/>
                </div>
                <input type="submit" value="Add Item" className="btn btn-success w-100 my-2"/>
            </form>
        </div>
    )
}

export default ProductForm;