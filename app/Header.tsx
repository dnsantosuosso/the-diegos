'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200 relative z-50">
      <h1 className="text-2xl font-bold uppercase tracking-wide">THEDIEGOS</h1>
      <nav className="flex space-x-8">
        <Link
          href="/"
          className="hover:text-gray-700 transition-colors"
        >
          Home
        </Link>

        {/* Gallery Dropdown */}
        <div className="relative">
          <button
            className="hover:text-gray-700 transition-colors"
            onClick={() => handleDropdownToggle('gallery')}
          >
            Gallery
          </button>
          {activeDropdown === 'gallery' && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={handleDropdownClose}
              />
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <Link
                  href="/gallery"
                  className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                  onClick={handleDropdownClose}
                >
                  Photo Collage
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Travel Dropdown */}
        <div className="relative">
          <button
            className="hover:text-gray-700 transition-colors"
            onClick={() => handleDropdownToggle('travel')}
          >
            Travel
          </button>
          {activeDropdown === 'travel' && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={handleDropdownClose}
              />
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <h3 className="font-semibold text-gray-800 px-2 py-1">
                    Africa
                  </h3>
                  <Link
                    href="/travel/kenya"
                    className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={handleDropdownClose}
                  >
                    Kenya
                  </Link>
                  <hr className="my-2" />
                  <h3 className="font-semibold text-gray-800 px-2 py-1">
                    Asia
                  </h3>
                  <Link
                    href="/travel/thailand"
                    className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={handleDropdownClose}
                  >
                    Thailand
                  </Link>
                  <Link
                    href="/travel/vietnam"
                    className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={handleDropdownClose}
                  >
                    Vietnam
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Books Dropdown */}
        <div className="relative">
          <button
            className="hover:text-gray-700 transition-colors"
            onClick={() => handleDropdownToggle('books')}
          >
            Books
          </button>
          {activeDropdown === 'books' && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={handleDropdownClose}
              />
              <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <Link
                  href="/books"
                  className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                  onClick={handleDropdownClose}
                >
                  All Recommendations
                </Link>
                <Link
                  href="/books/travel"
                  className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                  onClick={handleDropdownClose}
                >
                  Travel Books
                </Link>
                <Link
                  href="/books/photography"
                  className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                  onClick={handleDropdownClose}
                >
                  Photography Books
                </Link>
                <Link
                  href="/books/culture"
                  className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                  onClick={handleDropdownClose}
                >
                  Culture & Society
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
