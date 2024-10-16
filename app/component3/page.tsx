const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden relative">
      {/* Blob 1 - Vivid Blue */}
      <div className="absolute top-0 -left-10 w-[40rem] h-[40rem] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
      {/* Blob 2 - Vibrant Orange */}
      <div className="absolute top-0 -right-10 w-[40rem] h-[40rem] bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
      {/* Blob 3 - Bright Pink */}
      <div className="absolute -bottom-16 left-1/4 w-[40rem] h-[40rem] bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Page;
