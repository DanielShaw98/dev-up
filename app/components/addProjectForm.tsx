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
  const [focusField, setFocusField] = useState<string>('');

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

  const handleFocus = (field: string) => {
    setFocusField(field);
  };

  const handleBlur = () => {
    setFocusField('');
  };

  return (
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <label htmlFor="title" className="block text-white text-2xl font-sub font-light">Title</label>
            <p>(required)</p>
          </div>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => handleFocus('title')}
            onBlur={handleBlur}
            required
            className="w-full p-2 border border-white rounded font-body text-white bg-transparent"
          />
          {focusField === 'title' && (
          <p className="text-white mt-1 font-body">Enter a brief explanation of your project.</p>
        )}
        </div>
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <label htmlFor="title" className="block text-white text-2xl font-sub font-light">Description</label>
            <p>(required)</p>
          </div>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() => handleFocus('description')}
            onBlur={handleBlur}
            required
            className="w-full p-2 border border-white rounded font-body text-white bg-transparent"
          />
          {focusField === 'description' && (
          <p className="text-white mt-1 font-body">
            Enter a detailed description of the project.<br />
            - What problem you are trying to solve.<br />
            - Who is your target audience.<br />
            - Why you want to build this project.
          </p>
        )}
        </div>
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <label htmlFor="title" className="block text-white text-2xl font-sub font-light">Name</label>
            <p>(optional)</p>
          </div>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className="w-full p-2 border border-white rounded font-body text-white bg-transparent"
          />
          {focusField === 'name' && (
          <p className="text-white mt-1 font-body">Provide your project name if you have one.</p>
        )}
        </div>
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <label htmlFor="title" className="block text-white text-2xl font-sub font-light">Styles</label>
            <p>(optional)</p>
          </div>
          <input
            id="styles"
            type="text"
            value={styles}
            onChange={(e) => setStyles(e.target.value)}
            onFocus={() => handleFocus('styles')}
            onBlur={handleBlur}
            className="w-full p-2 border border-white rounded font-body text-white bg-transparent"
          />
          {focusField === 'styles' && (
          <p className="text-white mt-1 font-body">Specify any styles, themes, colours, fonts you want for your project.</p>
        )}
        </div>
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <label htmlFor="title" className="block text-white text-2xl font-sub font-light">Tools</label>
            <p>(optional)</p>
          </div>
          <input
            id="tools"
            type="text"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
            onFocus={() => handleFocus('tools')}
            onBlur={handleBlur}
            className="w-full p-2 border border-white rounded font-body text-white bg-transparent"
          />
          {focusField === 'tools' && (
          <p className="text-white mt-1 font-body">List any tools or technologies you want to use in your project.</p>
        )}
        </div>
        <button
          type="submit"
          className="text-white hover:text-orange font-sub font-light text-lg md:text-xl transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
        >
          Add Project
        </button>
      </form>
  );
}
