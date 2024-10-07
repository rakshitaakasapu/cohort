import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

// function App() {

// return (
// <>
// <div className='grid grid-cols-1 md:grid-cols-3'>
//   <div className="bg-pink-300">amma</div>
//   <div className="bg-blue-300">daddy</div>
//   <div className="bg-purple-300">harshu</div>
// </div>
// </>
//   )
// }


function App(){
  return (
    <div className='grid grid-cols-3'>
    <RevenueCard title ={"Amount pending"} amount={"92,312.20"} orderCount={13}/>
    </div>
  )
}

export default App
