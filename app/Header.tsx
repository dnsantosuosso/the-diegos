import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold uppercase tracking-wide">THEDIEGOS</h1>
      <nav className="space-x-6">
        <Link
          href="/"
          className="hover:text-gray-700"
        >
          Home
        </Link>
        <Link
          href="/series01"
          className="hover:text-gray-700"
        >
          Wet Market Series
        </Link>
      </nav>
    </header>
  );
}
