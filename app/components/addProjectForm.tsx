"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [styles, setStyles] = useState('');
  const [tools, setTools] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize the useRouter hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, name, styles, tools }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to add project');
        return;
      }

      // Handle successful project creation
      alert('Project added successfully!');
      setTitle('');
      setDescription('');
      setName('');
      setStyles('');
      setTools('');

      // Redirect to the projects page
      router.push('/projects');
    } catch (error) {
      setError('An unexpected error occurred');
      console.error('Failed to add project:', error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="styles" className="block text-gray-700">Styles</label>
          <input
            id="styles"
            type="text"
            value={styles}
            onChange={(e) => setStyles(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tools" className="block text-gray-700">Tools</label>
          <input
            id="tools"
            type="text"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Project
        </button>
      </form>
  );
}
