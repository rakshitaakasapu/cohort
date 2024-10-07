// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos")
//       .then(async function(res) {
//         const json = await res.json();
//         setTodos(json.todos);
//       })
//   }, [])

//   return <div>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//   </div>
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// export default App;

// import { useState } from "react";
// import { useEffect } from "react";

// function App(){
//   const [ids,setIds]=useState(1);
//   return <div>
//     <button onClick={function(){setIds(1)}}>1</button>
//     <button onClick={function(){setIds(2)}}>2</button>
//     <button onClick={function(){setIds(3)}}>3</button>
//     <button onClick={function(){setIds(4)}}>4</button>
//     <Todo id={ids} />
//   </div>

  
// }



// function Todo({id}){
//   const [todo,setTodo] = useState({});

//   useEffect(()=>{
//     fetch("https://sum-server.100xdevs.com/todo?id="+ id)
//       .then(async function(res){
//         const json = await res.json();
//         setTodo(json.todo);
//     })
//   },[id])

//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }
// export default App;

//----------------------------------------------------------------------------------------------

// import { useEffect } from "react";
// import { useMemo } from "react";
// import { useState } from "react";

// function App(){
//   const [counter,setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
  //const [count,setCount]=useState(0);
  
  // let count = useMemo(()=>{
  //   let finalCount=0;
  //   for(let i=1;i<=inputValue;i++){
  //     finalCount=finalCount+i;
  //   }
  //   return finalCount;
  // },[inputValue]);

  // useEffect(()=>{
  //   let finalCount=0;
  //   for(let i = 1;i<=inputValue;i++){
  //     finalCount=finalCount+i;
  //   }
  //   setCount(finalCount);
  // },[inputValue])

//   return(
//     <div>
//       <input onChange={function(e){
//         setInputValue(e.target.value)
//       }} placeholder={"Find sum from 1 to n"}/>
//       <br></br>
//       <br></br>
//       Sum from 1 to {inputValue} is {count}
//       <br></br>
//       <br></br>
//       <button onClick={()=>{
//         setCounter(counter+1);
//       }}>Counter ({counter})</button>
//     </div>
//   )
// }

// export default App;


//----------------------------------------------------------------------------------------------------

import { useEffect, useState } from "react";

function useTodos(){
  const [todos, setTodos]=useState([]);

  useEffect(()=>{
    axios.get(""
      .then((res)=>{
        setTodos(Res.data.todos)
      })
    )
  },[])
  return todos;
}

function App(){
  const todos =useTodos();
  return <div>
    {todos}
  </div>
}

export default App;