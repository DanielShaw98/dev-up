import React from 'react'

const topNavbar = () => {
  return (
    <nav className="bg-black border-b border-grey">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b-grey">
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-4xl font-semibold whitespace-nowrap font-main text-orange">DevUp</span>
        </a>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-orange font-sub text-xl transition duration-200 ease-in-out">Dashboard</a>
          <span className="text-xl text-white">⫶</span>
          <a href="#" className="text-white hover:text-orange font-sub text-xl transition duration-200 ease-in-out">Projects</a>
          <span className="text-xl text-white">⫶</span>
          <a href="#" className="text-white hover:text-orange font-sub text-xl transition duration-200 ease-in-out">Profile</a>
        </div>
      </div>
    </nav>
  )
}

export default topNavbar
