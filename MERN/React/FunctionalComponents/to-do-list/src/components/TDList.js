import React from 'react';

const TDList = (props) => {

    const checkBoxHandler = () => {
        if(props.completed){
            props.onUpdateTask(props.task, false, props.index)
        }
        else{
            props.onUpdateTask(props.task, true, props.index)
        }
    }



    return(
        <tr>
            {props.completed ? <td><s>{props.task}</s></td> : <td>{props.task}</td>}
            {props.completed ? <td><input type="checkbox" checked onChange={checkBoxHandler}/></td> : <td><input type="checkbox" onChange={checkBoxHandler}/></td>}
            <td><button className="btn btn-danger" onClick={() => props.onDelTask(props.index)}>✖</button></td>
        </tr>
    )


}

export default TDList;