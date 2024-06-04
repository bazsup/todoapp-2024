function Todos() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Todo App</h1>
      <div>
        <input className="border box-content rounded-l-xl border-slate-400 py-2 px-4 w-56" />
        <button className="border border-blue-500 rounded-r-xl bg-blue-500 text-white py-2 px-4">
          Add
        </button>
      </div>
      <div>
        <ul>
          <li>
            <input type="checkbox" className="mr-2" checked />
            <span className="text-lg line-through">sleep</span>
          </li>
          <li>
            <input type="checkbox" className="mr-2" />
            <span className="text-lg">eat</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todos;
