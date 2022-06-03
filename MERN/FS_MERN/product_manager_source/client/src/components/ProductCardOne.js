import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const ProdcutCard = (props) => {
    const history = useHistory();
    
    const DelHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${props._id}/delete`)
            .then(res => history.push("/products/all"))
            .catch(err => console.log(err))
        
    }
    
    return(
        <div className="mx-auto my-3 w-75 p-3 text-center">
            <h3 className="card-header">{props.title}</h3>
            <p>${(props.price).toFixed(2)}</p>
            <p>Description:<br/>{props.description}</p>

            <div className="d-flex justify-content-between">
                
                    <Link className="text-decoration-none text-white btn btn-primary w-25" to={`/products/${props._id}/edit`}>
                        Edit
                    </Link>
                        
                    <button className="text-white btn btn-danger w-25" onClick={()=>DelHandler()}>Delete</button>
                    {/* <Link className="text-decoration-none text-white btn btn-danger w-25" to="/prodcuts/all" onClick={()=>DelHandler}>
                        Delete
                    </Link> */}
                    
            </div>
        </div>
    )
}

export default ProdcutCard;