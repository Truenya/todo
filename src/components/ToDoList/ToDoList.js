import React from "react";

import ToDoListItem from "../ToDoListItem/ToDoListItem";
import './ToDoList.css'
const ToDoList=({ items,onDelete,onToggleDone,onToggleImportant })=>{
    //const things=['Learn React','Build React App']
    const elements = items.map((item)=> {
        const {id,...itemProps}=item;
        return(
            <li key={id} className="list-group-item">
                <ToDoListItem
                    { ... itemProps }
                    onDelete={()=> onDelete(id)}
                    onToggleImportant={()=> onToggleImportant(id)}
                    onToggleDone={()=>onToggleDone(id)}
                />
            </li>
        )
    });

    return(
        <ul className="list-group ToDoList">
            { elements }
        </ul>
    );
};

export default ToDoList;