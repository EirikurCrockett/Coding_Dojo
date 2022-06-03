import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import People from './views/People';
import Planets from './views/Planets';
import axios from 'axios';
    
function App() {
    const [route, setRoute] = useState(["/people", "/1"])
    const [options, setOptions] = useState(
        {"people" : 83,
        "planets" : 60}
    )
    const [limit, setLimit] = useState(82);
    const history = useHistory();

    const selectHandler = (e) =>{
        setLimit(options[e.target.value]);
        // console.log(limit);
        route[0] = "/" + e.target.value;
        setRoute([...route]);
    } 

    const numHandler = (e) => {
        route[1] = "/" + e.target.value;;
        setRoute([...route]);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const tempRoute = route[0] + route[1];
        console.log(tempRoute);
        history.push(tempRoute);
    }

    return (
        <div>
            <form className="w-25 mx-auto my-3 p-1" onSubmit={submitHandler}>
                <div className="form-group p-1">
                    <label htmlFor="category" className="form-label">Category:</label>
                    <select className="form-control" name="category" onChange={selectHandler}>
                        {
                            Object.keys(options).map((item,i) => 
                                <option key={i} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className="form-group p-1">
                        <label htmlFor="index" className="form-label">Index</label>
                        <input type="number" name="index" className="form-control" min="1" max={limit} onChange={numHandler}/>
                </div>
                <input type="submit" value="Submit!" className="btn btn-success w-100 "/>
            </form>

            <Switch>
                {/* Landing Page */}
                <Route exact path="/">
                        <h1 className="text-center">home</h1>
                </Route>
                {/* People */}
                <Route exact path="/people/:id">
                    <People/>
                </Route>
                {/* Planets */}
                <Route exact path="/planets/:id">
                    <Planets/>
                </Route>
            </Switch>
        </div>
    );
}
    
export default App;
