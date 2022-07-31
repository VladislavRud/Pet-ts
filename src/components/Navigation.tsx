import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="h-[50] flex justify-between px-5 bg-gray-500 items-center  text-white">
        <span className="font-bold">Pet TS React</span>
        <span>
            <Link to="/" className="mr-5">Product</Link>
            <Link to="/about">About</Link>
        </span>
    </nav>
  )
}

export default Navigation