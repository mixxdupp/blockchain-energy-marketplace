import { motion } from "framer-motion";
import { BoltIcon } from "@heroicons/react/24/solid";

export default function ListingCard({ listing, onBuy }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="p-6 rounded-2xl glass lift"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-orange-100">
         <BoltIcon className="h-6 w-6 text-indigo-400" />
        </div>
        <h4 className="text-lg md:text-xl font-semibold text-gray-900">{listing.name}</h4>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="glass rounded-xl p-3">
          <div className="text-gray-600">Energy</div>
          <div className="font-bold">{listing.energy} kWh</div>
        </div>
        <div className="glass rounded-xl p-3">
          <div className="text-gray-600">Price</div>
          <div className="font-bold">${listing.price} / kWh</div>
        </div>
      </div>

      <button
        onClick={() => onBuy(listing)}
        className="mt-6 w-full px-4 py-2 bg-orange-600 text-white rounded-xl font-medium shadow hover:bg-orange-700 transition"
      >
        Buy Energy
      </button>
    </motion.div>
  );
}
