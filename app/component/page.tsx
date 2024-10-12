const page = () => {
  return (
    <main className="bg-gradient-to-r from-pink-400 to-blue-400 min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-56 bg-white z-10 rounded-2xl"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-56 rotate -rotate-12 bg-gradient-to-r z-0 from-yellow-300 via-red-500 to-pink-400 rounded-2xl"></div>
      </div>
    </main>
  );
};

export default page;
