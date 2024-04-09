import React from 'react'
import { useSelector } from 'react-redux'

function DisplatCounter() {

  const counter = useSelector(store => store.counter)

  return (
    <>
      <p className="lead mb-4">Counter Ccurrent Value:{counter}</p>
    </>
  )
}

export default DisplatCounter