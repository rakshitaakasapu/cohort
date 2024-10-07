// import { lazy,Suspense } from "react"
// import { BrowserRouter, Route, Routes,useNavigate } from 'react-router-dom'
// const Dashboard = lazy(()=> import('./components/Dashboard'));
// const Landing = lazy(()=> import('./components/Landing'));

// function App() {
//   return(
//     <div>
//     <BrowserRouter>
//     <AppBar/>
//     <Suspense fallback={<div>Loading...</div>}>
    
//     <Routes>
//       <Route path="/dashboard" element={<Dashboard/>}/>
//       <Route path="/" element={<Landing/>}/>
//     </Routes>
//     </Suspense>
//     </BrowserRouter>
//     </div>
    
//   )
// }

// function AppBar(){
//   const navigate = useNavigate();
//   return <div>
//         <button onClick={()=>{
//          navigate("/");
//         }}>Landing</button>

//         <button onClick={()=>{
//           navigate("/dashboard");
//         }}>Dashboard</button>
//       </div>
// }

// export default App

import { useState } from "react";
import { CountContext } from "./Context";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./atoms/Count";

function App(){
  //wrap anyone that wants to use the teleported value inside a proovider
  return(
    <div>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count(){
return <div>
  <CountRenderer/>
  <Buttons/>
</div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Even(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven? "It is even":null}
  </div>
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom) ;
  return <div>
      <button onClick={()=>{setCount(count + 1)}}>Increase</button>
      <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
      <Even/>
</div>
}

export default App
