import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage'

export default function RouterGate() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/grizzly-app' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
