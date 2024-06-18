'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const CreateTodo = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');

  async function handleCreateData() {
    await fetch('https://v1.appbackend.io/v1/rows/dMwi5OV1sL1r', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ title, description }]),
    });

    router.refresh();
    setTitle('');
    setDesc('');
  }

  return (
    <div className="flex gap-9">
      <div className="flex items-center">
        <input
          className="h-10 w-[550px] rounded-lg p-4 text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>

      <div className="flex items-center">
        <textarea
          className="h-10 w-[600px] rounded-lg px-4 pt-2 text-white"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
        ></textarea>
      </div>
      <div className="flex items-center">
        <button onClick={handleCreateData}>CREATE</button>
      </div>
    </div>
  );
};
