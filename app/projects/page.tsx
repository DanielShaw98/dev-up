import React from 'react'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="mx-32 my-8 h-screen">
      <h1 className="text-3xl font-main text-center mb-6">Projects</h1>
      <div>
        <Link href="/projects/add-project">Add Project</Link>
      </div>
    </div>
  )
}
