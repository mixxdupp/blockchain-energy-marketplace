export default function About() {
  return (
    <section className="px-6 md:px-8 py-12">
      <div className="max-w-3xl glass rounded-2xl p-6">
        <h3 className="text-3xl font-bold text-gray-900">About</h3>
        <p className="mt-4 text-gray-800">
          This is a frontend-only prototype for a decentralized energy marketplace.
          All backend calls are centralized in <code>src/services/backend.js</code> with a mock switch,
          so you can plug in a Rust canister on ICP later without touching the UI.
        </p>
      </div>
    </section>
  );
}
