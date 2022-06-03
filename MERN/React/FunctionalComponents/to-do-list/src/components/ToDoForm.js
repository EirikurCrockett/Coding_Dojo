import React, { useState } from 'react';

const ToDoForm = (props) => {
    const [toDo, setToDo] = useState({
        task: "",
        completed: false
    })

    const changeHandler = (e) => {
        setToDo({
            ...toDo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onNewTask(toDo);
        console.log("Passed onNewTask function")
    }



    return(
        <div className="mx-auto my-3 w-50">
            <form onSubmit={ submitHandler }>
                <div className="form-group">
                    <label htmlFor="task" className="form-label ">To Do:</label>
                    <input type="text" name="task" className="form-control" onChange={changeHandler}/>
                </div>
                <input type="submit" value="Add To List" className="btn btn-success m-1"/>
            </form>
        </div>
    );

}

export default ToDoForm;