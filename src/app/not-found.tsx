import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050814] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-black mb-3">404 - Page Not Found</h2>
      <p className="text-slate-400 mb-6 text-sm">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

