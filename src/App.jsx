import React from 'react'
import Signup from './components/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Verify from './components/Verify'

const App = () => {
  return (
    <>
    {/* <Signup/> */}
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/verify" element={<Verify/>}/>

      {/* Wild card */}
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App