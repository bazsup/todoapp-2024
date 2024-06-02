import heroContent from "../assets/hero-content.jpg";

function Home() {
  return (
    <div className="flex">
      <div className="w-1/3 flex p-4 flex-col justify-center items-start text-left gap-6">
        <h1 className="text-5xl leading-tight">
          <span className="text-gray-500">Simplest Todo App powered by </span>
          <span className="text-blue-500 font-bold line-he">React</span>
        </h1>
      </div>
      <div className="w-2/3">
        <img className="hero-image" src={heroContent} />
      </div>
    </div>
  );
}

export default Home;
