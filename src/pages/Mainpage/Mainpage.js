import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Layout from './Layout'

export default function Mainpage() {
  return (
    
    <div style={{display : "flex"}}>
        <Sidebar/>
        <Layout/>
    </div>

  )
}
