export default function Footer() {
  return (
    <footer className="mx-4 mb-4 mt-16 rounded-2xl glass p-4">
      <div className="max-w-6xl mx-auto px-2 md:px-4 text-xs md:text-sm text-gray-700 flex flex-col md:flex-row justify-between">
        <p>© {new Date().getFullYear()} Energy Market.</p>
        <p className="mt-1 md:mt-0">Built for decentralized, community-driven energy trading.</p>
      </div>
    </footer>
  );
}
