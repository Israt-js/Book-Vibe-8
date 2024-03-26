const Banner = () => {
  return (
    <div className="flex justify-between align-baseline p-10 bg-slate-100 m-10">
      <div>
        <h1 className="ml-9 text-2xl font-extrabold">Books to freshen <br /> up your bookshelf</h1>
        <button className="bg-green-500 text-white p-2 text-base font-medium m-3 ml-9 border-none rounded-md cursor-pointer">View The List</button>
      </div>
      <img className="w-60 h-auto" src="./img/banner.png" alt="Banner Image"/>
    </div>
  );
};

export default Banner;
