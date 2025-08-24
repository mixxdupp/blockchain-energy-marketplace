import { useWallet } from "../state/WalletContext";
import { motion } from "framer-motion";

export default function Wallet() {
  const { isConnected, connect, disconnect, principal, balance, setBalance } = useWallet();

  return (
    <section className="px-6 md:px-8 py-12">
      <h3 className="text-3xl font-bold text-gray-900">👛 Wallet</h3>

      {!isConnected ? (
        <div className="mt-6 glass rounded-2xl p-6">
          <p className="text-gray-700">Connect to start trading.</p>
          <button
            onClick={connect}
            className="mt-4 px-5 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 pulse"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="p-6 glass rounded-2xl"
          >
            <div className="text-sm text-gray-600">Principal</div>
            <div className="font-mono break-all">{principal}</div>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .05 }}
            className="p-6 glass rounded-2xl flex items-center justify-between"
          >
            <div>
              <div className="text-sm text-gray-600">Balance</div>
              <div className="text-2xl font-extrabold">{balance} TKN</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setBalance(balance + 100)}
                className="px-4 py-2 rounded-xl bg-gray-900 text-white/90 hover:text-white"
              >
                +100 (demo)
              </button>
              <button
                onClick={() => setBalance(Math.max(0, balance - 50))}
                className="px-4 py-2 rounded-xl glass"
              >
                −50 (demo)
              </button>
              <button
                onClick={disconnect}
                className="px-4 py-2 rounded-xl bg-orange-600 text-white hover:bg-orange-700"
              >
                Disconnect
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
