import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'


function Controlls() {
  const dispatch = useDispatch()

  const inputElement = useRef()

  const handleIncremente = () => {
    dispatch({
      type: 'INCREMENT',
    })

  }
  const handleDecremente = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }
  const handleAdd = () => {
    inputElement.current.value
    dispatch({
      type: 'ADD', payload: {
        num: inputElement.current.value
      }
    })
    inputElement.current.value = ""
  }
  const handleSubstract = () => {
    inputElement.current.value
    dispatch({
      type: 'SUBSTRACT', payload: {
        num: inputElement.current.value
      }
    })
    inputElement.current.value = ""
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={handleIncremente} type="button" className="btn btn-primary btn-lg px-4 gap-3">+1</button>
        <button onClick={handleDecremente} type="button" className="btn btn-success">-1</button>
        <input type="text" ref={inputElement} placeholder='Enter number' className="btn btn-primary btn-lg px-4 gap-3" />
        <button type="button" onClick={handleAdd} className="btn btn-info">Add</button>
        <button type="button" onClick={handleSubstract} className="btn btn-danger">Substract</button>
      </div>
    </>
  )
}

export default Controlls