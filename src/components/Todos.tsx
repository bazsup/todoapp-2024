function Todos() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Todo List</h1>
      <div>
        <input
          className="border box-content rounded-l-xl border-slate-400 py-2 px-4 flex-1"
          placeholder="What do you need to do?"
        />
        <button className="border border-blue-500 rounded-r-xl bg-blue-500 text-white py-2 px-4 w-2/12">
          + Add
        </button>
      </div>
      <div className="mt-2">
        <ul className="flex flex-col gap-2">
          <li className="border rounded-xl w-full bg-white px-4 py-2">
            <input type="checkbox" className="mr-2" checked />
            <span className="text-lg line-through">sleep</span>
          </li>
          <li className="border border-blue-500 rounded-xl w-full bg-white px-4 py-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-lg">eat</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todos;
