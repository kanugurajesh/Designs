const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden relative">
      {/* First row of balls */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 left-48 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Second row of balls */}
      <div className="absolute top-1/3 -left-10 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
      <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000"></div>

      {/* Third row of balls */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

      {/* Balls in the center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4 w-48 h-48 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Page;
