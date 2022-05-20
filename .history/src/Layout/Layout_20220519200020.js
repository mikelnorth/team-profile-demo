import React from 'react'
import './Layout.scss'
import { Outlet } from 'react-router'


export default function Layout({children}) {
  return (
    <main>
      {children}
    </main>
  )
}
