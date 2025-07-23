export const Loader = () => (
  <div className="w-full h-screen border border-red-500 flex flex-col items-center justify-center p-8">
    <div className="h-30 border border-emerald-500">
      <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-black rounded-full" />
      <span className="ml-4 text-sm text-gray-600">Loading 123...</span>
    </div>
  </div>
);
