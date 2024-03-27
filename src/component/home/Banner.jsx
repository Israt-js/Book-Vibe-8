const Banner = () => {
  return (
    <div className="hero h-[400px] p-10 ml-12 w-[1100px] bg-base-200">
  <div className="hero-content justify-between flex-col lg:flex-row-reverse">
  <img src="https://i.ibb.co/s527Zyq/banner-removebg-preview.png" alt="banner" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl mr-80 font-bold">Books to freshen <br /> up your bookshelf</h1>
      <button className="btn mt-5 bg-green-500">View The List</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
