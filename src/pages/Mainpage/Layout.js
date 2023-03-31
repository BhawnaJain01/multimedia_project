import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div style={{width : "75%" }}>
        <Outlet/>
    </div>
  )
}

