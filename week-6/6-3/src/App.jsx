// import { useState } from 'react'

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   setTimeout(() => {
//     setBankData({
//       income: 100
//     });
//   }, 3000);

//   setTimeout(() => {
//     setExchangeData({     //infinite re renders
//       returns: 100
//     });
//   }, 1000);

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App

//----------------------------------------------------------------------------------------------------------------------------------

// import { useEffect, useState } from 'react'

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});
//   console.log("re render")

//   useEffect(()=>{           //we use useEffect so that it re renders only once
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     }, 3000);
//   },[])

//   useEffect(()=>{
//     setTimeout(() => {
//       setExchangeData({    
//         returns: 100
//       });
//     }, 1000);
//   },[])

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App

//-----------------------------------------------------------------------------------------------------------------------

// import { useEffect, useState, useMemo, useCallback, memo } from 'react'

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     },5000)
//   }, [])

//   const calculateCryptoReturns = useCallback(()=>{
//     return exchange1Data.returns + exchange2Data.returns;
//   },[exchange1Data])

//   return(
//     <div>
//       <CryptoGainsCalc calculateCryptoReturns={calculateCryptoReturns}/>
//     </div>
//   )}
  // if we put this only in function then it keeps re rendering irrespective of its props not changing
  // because function a() == function b() is false (even if they are same)
  // so we use useCallback


  // const incomeTax = (calculateCryptoReturns + bankData.income) * 0.3

//   const CryptoGainsCalc = memo(({calculateCryptoReturns})=>{
//     console.log("re render")
//     return <div>
//       Your crypto returns are {calculateCryptoReturns()}
//     </div>
//   })


// export default App


import {useEffect, useState, useRef} from 'react'

function App(){
  const[incomeTax, setIncomeTax] = useState(2000);
  const divRef= useRef();

  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML = 10
    },5000)
  },[])

  return(
    <div>
      Income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App