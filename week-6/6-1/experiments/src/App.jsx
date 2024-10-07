// import { useState } from "react"

import { Children } from "react"

// function App(){
//   const [firstTitle,setFirstTitle]= useState("my name is raka");

//   function changeTitle(){
//     setFirstTitle("my name is "+Math.random())
//   }

//   return(
//     <div>
//       <button onClick={changeTitle}>Click on me to change the title</button>
//       <Header title={firstTitle}></Header>
//       <Header title="my name is rakshita"></Header>
//     </div>
//   )
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }
// export default App


// import { useState } from "react";

// let count =4;

// function App(){
//   const[todos, setTodos] = useState([{
//     id: 1,
//     title: "Cohort",
//     description: "6.1"
//   },{
//     id: 2,
//     title: "gym",
//     description: "treadmill for 15 mins"
//   },{
//     id: 3,
//     title: "study MES",
//     description: "revise and do questions"
//   }])


//   function addTodo(){
//     setTodos([...todos,{ //... -> spreads all the existing todos and adds the below one
//       id: count++,
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }

//   return(
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map(todo=><Todo key={todo.id}title={todo.title} description={todo.description}/>)}
//     </div>
//   )
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>

//   </div>
// }

// export default App


function App(){
  return <div>
  <CardWrapper>
    hemlo babe
  </CardWrapper>
  </div>
  }

function CardWrapper({children}){
  return <div style={{ border: "2px solid black", padding:20}}>
   {children}
  </div>
}

export default App