import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-[20rem] w-[60rem] flex items-center justify-evenly mb-6">
      <Link
        to="/easy"
        className="h-[15rem] w-[18rem] flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold">Easy</h3>
      </Link>
      <Link
        to="/medium"
        className="h-[15rem] w-[18rem] flex items-center justify-center px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold">Medium</h3>
      </Link>
      <Link
        to="/advanced"
        className="h-[15rem] w-[18rem] flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold">Advanced</h3>
      </Link>
    </div>
  );
}
