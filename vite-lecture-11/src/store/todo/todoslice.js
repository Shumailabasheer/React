import { createSlice,nanoid } from "@reduxjs/toolkit";

// ==initial value====
let initialState ={
    todo:[],
}

const tasks = localStorage.getItem("todo");
const data = JSON.parse(tasks);
initialState.todo = data || [];

const todoslice= createSlice({
name :"todo",
initialState,
reducers:{
    addTask:(state,action)=>{
        const task ={
            data:action.payload,
            id:nanoid(),
        }
        state.todo.push(task)

        localStorage.setItem("todo", JSON.stringify(state.todo));
    },

    deleteTask: (state, action) => {
     state.todo= state.todo.filter(task =>  task.id !== action.payload);
      // localStorage update karo delete kare ga lcs sy
  localStorage.setItem("todo", JSON.stringify(state.todo));

},
// ===update wih UI and localstorage(edite)
updateTask:(state,action)=>{
     state.todo = state.todo.map((task, i) => {
        return task?.id === action.payload.id ?
          action.payload  : task
      });
      localStorage.setItem("todos", JSON.stringify(state.todo));
}

}
})
//== name export:addTask ko imp krwaya todoslice ka action ma sy
export const{addTask,deleteTask,updateTask} = todoslice.actions

// ==defoult export: todoslice ma reducer ko krwana ha
export default todoslice.reducer;