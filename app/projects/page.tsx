import React from 'react'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="mx-32 my-8 h-screen">
      <div className="flex flex-row justify-center items-center space-x-8 mb-6">
        <h1 className="text-3xl font-main text-center">Projects</h1>
        <div className="relative group">
          <Link
            href="/projects/add-project"
            className="px-3 pb-2 font-thin text-4xl transition-all duration-200 ease-in-out text-white hover:text-orange border border-white rounded-lg hover:rounded-3xl hover:border-orange"
          >
            +
          </Link>
          <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-0 pt-1 opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out whitespace-nowrap">
            Add Project
          </span>
        </div>
      </div>
    </div>
  )
}
