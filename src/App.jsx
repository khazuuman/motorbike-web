import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header/Header'

function App() {
  return (
    <Suspense fallback={<div>...loading</div>}>
        <Header/>
        <Outlet/>
    </Suspense>
  )
}

export default App