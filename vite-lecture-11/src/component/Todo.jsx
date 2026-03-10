import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, updateTask } from '../store/todo/todoslice';

const Todo = () => {

  const dispatch = useDispatch();
const todos = useSelector((state) => state.todo);
// console.log(todos)

//=== state bane gi inpute field check ho gi true hone pr inpute show ho wrna to ni ho edite krte waqt
const [isEdite, setIsEdite] = useState(false)
const [currenttask,setCurrenttask] =useState(null)
// console.log(currenttask)

  return (


<div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-secondary-soft border-b border-default">
          <tr>
            <th scope="col" className="px-6  text-blue-700 font-bold py-3 ">
             Task.id
            </th>
            <th scope="col" className="px-6 text-blue-700 font-bold py-3 ">
             Task
            </th>
         
            <th scope="col" className="px-6 py-3 font-medium">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => (
            <tr
              key={index}
              className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                {todo.id || "id"}
              </th>
              <td className="px-6 py-4">{
              //== conditon lagae ga true ho inpute show krwana wrna normal task show==
              
                isEdite && currenttask.id === todo.id ?
               <input
                    type="text"
                    value={currenttask.data}
                    onChange={(e) => setCurrenttask({ ...currenttask, data: e.target.value })}
                    //== event lgaya ha onKeyUP
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {   //==iska under current key ka name mil jae ga ,agr key barabar ha enter ka dispatch krwana ha task ko
                        dispatch(updateTask(currenttask)); //edite ka liye jo func banaya tha wo ha updat....
                        setIsEdite(false);
                      }
                    }}
                  />:
                <p>{ todo.data || "no-task"}</p>
              
             }</td>
            
              <td className="px-6 py-4">
                <button
                onClick={()=>{setIsEdite(true); setCurrenttask(todo)}}
                  className="font-medium text-fg-brand hover:underline"
                >
                  Edit
                </button>

                <button
                 
                  className="ml-4 font-medium text-fg-brand hover:underline"
                    onClick={()=> dispatch(deleteTask(todo.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Todo
