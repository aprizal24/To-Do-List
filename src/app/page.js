import { CreateTodo } from '@/components/creatTodo';
import { DeleteTodo } from '@/components/deleteTodo';

export default async function Home() {
  const res = await fetch('https://v1.appbackend.io/v1/rows/dMwi5OV1sL1r', {
    cache: 'no-store',
  });
  const { data } = await res.json();

  return (
    <main>
      <section className="flex justify-center p-4">
        <div className="bg-gradient-to-r from-[#11091e] to-[#1F172D] p-6 m-auto w-screen rounded-2xl">
          <CreateTodo />
        </div>
      </section>

      <section className="flex justify-center p-4">
        <div className="bg-gradient-to-b from-[#10091A] to-[#1F172D] p-6 m-auto w-screen rounded-2xl text-white">
          <h1 className="flex justify-center text-6xl font-bold p-6">
            To-Do List
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pt-10 pb-10">
            {data.map((item) => {
              return (
                <div
                  key={item._id}
                  className="bg-[#362041] p-4 rounded-lg shadow-md border border-[#5F4366] bg-opacity-15 hover:bg-[#1c0e23]"
                >
                  <DeleteTodo item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
