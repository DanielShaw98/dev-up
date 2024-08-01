import React from 'react'

const topNavbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-5xl font-semibold whitespace-nowrap font-main text-orange">DevUp</span>
        </a>
        <div className="flex">
          <a href="#" className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-12 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange">Dashboard</a>
          <a href="#" className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-12 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange">Projects</a>
          <a href="#" className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-12 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange">Profile</a>
        </div>
      </div>
    </nav>
  )
}

export default topNavbar
