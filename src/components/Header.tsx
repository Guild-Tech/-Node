import { Server } from 'lucide-react';
import Cart from './Cart';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
=======
      <div className="container mx-auto  py-6">
        <div className="flex items-center justify-evenly">
>>>>>>> 7d6ba33 (hello)
          <div className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-green-400" />
            <h1 className="text-2xl font-bold">NODEHUB</h1>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="hover:text-green-400 transition-colors">Products</a>
              <a href="#about" className="hover:text-green-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            </nav>
<<<<<<< HEAD
            <Cart />
          </div>
=======
          </div>
          <Cart />
>>>>>>> 7d6ba33 (hello)
        </div>
      </div>
    </header>
  );
}