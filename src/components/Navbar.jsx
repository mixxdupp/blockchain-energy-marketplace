import { Link, NavLink } from "react-router-dom";
import { useWallet } from "../state/WalletContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { isConnected, connect, disconnect, principal, balance } = useWallet();

  const linkCls = ({ isActive }) =>
    `relative font-medium transition ${isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="sticky top-0 z-40 mx-4 mt-4 rounded-2xl glass-strong"
    >
      <div className="flex items-center justify-between px-6 md:px-8 py-3">
        <Link to="/" className="text-xl md:text-2xl font-extrabold text-gray-900">
          <span className="text-orange-600">⚡</span> Energy Market
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li><NavLink to="/" className={linkCls}>Home</NavLink></li>
          <li><NavLink to="/marketplace" className={linkCls}>Marketplace</NavLink></li>
          <li><NavLink to="/wallet" className={linkCls}>Wallet</NavLink></li>
          <li><NavLink to="/about" className={linkCls}>About</NavLink></li>
        </ul>

        <div className="flex items-center gap-3">
          {isConnected ? (
            <>
              <span className="hidden sm:block text-[12px] md:text-sm text-gray-700 glass px-2 py-1 rounded-lg">
                {principal?.slice(0, 6)}…{principal?.slice(-4)}
              </span>
              <span className="text-sm font-semibold glass px-3 py-1 rounded-full text-orange-700">
                {balance} TKN
              </span>
              <button
                onClick={disconnect}
                className="px-3 py-2 rounded-xl bg-gray-900 text-white/90 hover:text-white lift"
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              onClick={connect}
              className="px-4 py-2 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 pulse"
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
