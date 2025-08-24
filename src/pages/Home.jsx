import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Trade Renewable Energy <span className="text-orange-600">Directly</span>
          </motion.h2>
          <p className="mt-6 max-w-xl text-lg text-gray-700 glass p-4 rounded-2xl">
            A decentralized marketplace for communities to buy and sell excess renewable energy.
            Backend hooks are ready — just plug in your ICP Rust canister.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/marketplace"
              className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold shadow hover:bg-orange-700 transition pulse"
            >
              Explore Marketplace
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 glass rounded-xl font-semibold lift"
            >
              Learn More
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: .1 }}
          className="rounded-3xl glass-strong p-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl glass p-5">
              <div className="text-sm text-gray-600">Avg. Price</div>
              <div className="text-3xl font-extrabold">$0.15</div>
              <div className="text-xs text-gray-600 mt-1">per kWh</div>
            </div>
            <div className="rounded-2xl glass p-5">
              <div className="text-sm text-gray-600">Listings</div>
              <div className="text-3xl font-extrabold">120+</div>
              <div className="text-xs text-gray-600 mt-1">active</div>
            </div>
            <div className="rounded-2xl glass p-5 col-span-2">
              <div className="text-sm text-gray-600">Sustainability Impact</div>
              <div className="mt-2 h-2 rounded-full bg-white/50 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </div>
              <div className="mt-2 text-xs text-gray-600">66% of goal reached</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
