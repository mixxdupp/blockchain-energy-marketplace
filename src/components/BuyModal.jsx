import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BuyModal({ open, listing, onClose, onConfirm }) {
  const [kWh, setKWh] = useState(1);
  useEffect(() => { if (open) setKWh(1); }, [open]);
  if (!open || !listing) return null;

  const total = (kWh || 0) * listing.price;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        key="modal"
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="fixed inset-0 z-50 grid place-items-center p-4"
      >
        <div className="w-full max-w-md glass-strong rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Buy from {listing.name}</h3>
          <p className="mt-1 text-sm text-gray-700">
            Available: {listing.energy} kWh · ${listing.price}/kWh
          </p>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Quantity (kWh)</label>
            <input
              type="number"
              min="1"
              max={listing.energy}
              value={kWh}
              onChange={(e) => setKWh(Number(e.target.value))}
              className="mt-1 w-full border border-white/30 bg-white/40 backdrop-blur rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mt-4 text-sm text-gray-800">
            Total: <b>${Number.isFinite(total) ? total.toFixed(2) : "0.00"}</b>
          </div>

          <div className="mt-6 flex gap-3 justify-end">
            <button onClick={onClose} className="px-4 py-2 rounded-xl bg-gray-900 text-white/90 hover:text-white">
              Cancel
            </button>
            <button
              onClick={() => onConfirm(kWh)}
              className="px-4 py-2 rounded-xl bg-orange-600 text-white hover:bg-orange-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
