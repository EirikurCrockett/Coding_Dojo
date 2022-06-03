import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import TDList from './components/TDList';
import ToDoForm from './components/ToDoForm';

function App() { 
  const [ListTodo, setListTodo] = useState([]);

  const AddTask = (newTask) => {
    setListTodo([...ListTodo, newTask])
  }

  const UpdateTask = (taskName, completedStatus, index) => {
    ListTodo[index] = {task: taskName, completed: completedStatus}
    console.log(ListTodo);
    setListTodo([...ListTodo]);
  }
  
  const DelTask = (index) =>{
    ListTodo.splice(index,1);
    setListTodo([...ListTodo]);
  }

  return (
    <div className="App">
      <ToDoForm onNewTask = {AddTask}/>
      <div className="w-50 mx-auto my-0" >
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      ListTodo.map((item, i) =>{
                        return(
                          <TDList key={i} index={i} task={item.task} completed={item.completed} onDelTask={DelTask} onUpdateTask={UpdateTask}/>
                        )

                      })
                    }
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default App;
