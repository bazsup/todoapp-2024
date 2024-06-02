function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-lg text-right mx-auto flex justify-between py-4">
        <div className="items-center text-2xl">📝 Todo</div>
        <div className="flex gap-5 items-center justify-end">
          <a href="">Contact</a>
          <button className="rounded-full bg-blue-500 text-white px-4 py-2">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
