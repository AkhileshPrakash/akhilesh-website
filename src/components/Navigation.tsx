import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">Akhilesh Exports</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/infrastructure" className="hover:text-yellow-400">Infrastructure</Link>
        <Link to="/products" className="hover:text-yellow-400">Products</Link>
        <Link to="/buyers" className="hover:text-yellow-400">Buyers</Link>
        <Link to="/certificates" className="hover:text-yellow-400">Certificates</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
