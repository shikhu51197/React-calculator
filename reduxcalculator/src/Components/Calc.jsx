
import React, { useContext, useState } from 'react'
import { addCounter, DecCounter, divCounter, IncCounter, mulCounter, subCounter, reset } from '../Redux/action';
import { AppContext } from '../Redux/AppContextProvider';


function Calc() {

    const [value,setValue] = useState('')
    const {dispatch,getState} = useContext(AppContext)
    const {counter} = getState();
    const handleInc = ()=>{
        dispatch(IncCounter(1));       
    }
    const handleDec =()=>{
        dispatch(DecCounter(1));       
    }
    const handleAdd = ()=>{
        dispatch(addCounter(value))
    }
    const handleSub = ()=>{
        dispatch(subCounter(value))
    }
    const handleMul = ()=>{
        dispatch(mulCounter(value))
    }
    const handleDiv = ()=>{
        dispatch(divCounter(value))
    }
    const handlereset = ()=>{
        dispatch(reset())
    }
  return (
    <div>
    {/* <h1>Made By Shikhu</h1> */}
        <div>
      <h1  className='value'>Value: {counter} </h1>
      </div>
      <div>
          <button onClick={handleInc} className='inc btn'>Increment</button>
          <button onClick={handleDec} className='dec btn'>Decrement</button>
      </div>
      <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}
       placeholder='Enter a number' className='number'/>
      <div>
          <button onClick={handleAdd} className='btn1'>Add</button>
          <button onClick={handleSub}  className='btn2'>Subtract</button>
          <button onClick={handleMul} className='btn3'>Multiply</button>
          <button onClick={handleDiv} className='btn4'>Divide</button>
      </div>
      <div>
          <button onClick={handlereset} className='btn5'>RESET</button>
      </div>
    </div>
  )
}

export default Calc
