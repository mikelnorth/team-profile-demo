import React from 'react'
import './Layout.scss'
import { Outlet } from 'react-router'


export default function Layout() {
  return (
    <>
      <nav className="nav">X</nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
