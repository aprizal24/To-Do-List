'use client';

import { useRouter } from 'next/navigation';

export const DeleteTodo = ({ item }) => {
  const router = useRouter();

  async function handleDeleteData() {
    await fetch('https://v1.appbackend.io/v1/rows/dMwi5OV1sL1r', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([item._id]),
    });
    router.refresh();
  }
  return (
    <div>
      <h3 className="text-lg font-bold pb-4">{item.title}</h3>
      <p className="text-sm text-slate-400 pb-4">{item.description}</p>
      <button onClick={handleDeleteData}>DELETE</button>
    </div>
  );
};
