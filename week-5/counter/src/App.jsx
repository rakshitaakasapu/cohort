// import { useState } from "react";

// function App(){
//   const [count, setCount]=useState(0); //defining intial state
  
//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )
// }

// function CustomButton(props){

//   function onClickHandler(){
//     props.setCount(props.count+1);
//   }
  
//   return <button onClick={onClickHandler}>Counter {props.count}</button>
// }

// export default App



import React, { useState } from "react";

function App(){
  const [count, setCount]=useState(0); //defining intial state
  
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count+1);
  }
  
  return React.createElement(
    'button',
    {onClick: onClickHandler},
    `Counter ${props.count}`
  )
}

export default App
