import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
    <header className="fixed top-0 z-50 w-full bg-[#FFF7EF]/80 backdrop-blur-md border-b border-[#E4D1C2]">
  <div className="mx-auto max-w-5xl flex items-center justify-between px-6 sm:px-8 lg:px-0 py-4">
    
    {/* Brand / Logo */}
    <Link href="/" className="font-cursive text-2xl text-[#C27A4A] tracking-wide">
      Sameer Sondhi
    </Link>

    {/* Navigation Links */}
    <nav className="flex gap-6 text-sm font-medium text-[#4A403B]">
      <Link href="/" className="hover:text-[#C27A4A] transition">Home</Link>
      <Link href="/about" className="hover:text-[#C27A4A] transition">About</Link>
      <Link href="/projects" className="hover:text-[#C27A4A] transition">Projects</Link>
      <Link href="/approach" className="hover:text-[#C27A4A] transition">Approach</Link>
      <Link
        href="mailto:sameer.sondhi@outlook.com"
        className="hover:text-[#C27A4A] transition"
      >
        Contact
      </Link>
    </nav>

  </div>
</header>
    );
}