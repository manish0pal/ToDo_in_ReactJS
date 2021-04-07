import React, { useState } from 'react'
import Listitem from './Listitem'



const Card = () => {
    let [task,setTask]= useState();
    let [tasklist,setTaskList] = useState([]);
    const stopdfault = (events) =>{
        events.preventDefault();
    }
    const Typo = (params) => {
        const value = params.target.value;
        setTask(value)
    }
    const listoftodo = () =>{
        setTaskList((olddata)=>{
            return [...olddata,task]
        })
        setTask("");
    }
    const deletetask = (id) => {
        console.log(id);
        setTaskList((oldlist)=>{
            return oldlist.filter((arrElem,index)=>{
                return index !== id;
            });
        })
    }
    return (
        <>
            <div className="card">
            <form onSubmit={stopdfault}>
                <div className="headcard">
               

                
                    <div className="Input">
                        <input 
                        type="text" 
                        id="input" 
                        className="Input-text" 
                        placeholder="Enter Todo"
                        onChange={Typo} value={task}></input>
                        <label for="input" className="Input-label">Todo</label>
                    </div>
                    <button 
                    type="submit"
                    class="cool-button add" 
                    onClick={listoftodo}>
                    <i class="fa fa-plus"></i>
                    </button>
                    
                </div>
                </form>
                <h6 className="primary-text">Todo List</h6>
                <div className="List">
                <ol>
                {tasklist.map((val,index)=>{
                    return <Listitem task={val}  onSelect={() =>{deletetask(index)}}/>
                })} 
                </ol>
                </div>  
            </div>
        </>
    )


}
export default Card;