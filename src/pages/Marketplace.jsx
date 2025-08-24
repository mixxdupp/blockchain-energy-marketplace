import { useEffect, useState } from "react";
import { getListings, buyEnergy } from "../services/backend";
import ListingCard from "../components/ListingCard";
import BuyModal from "../components/BuyModal";
import { useWallet } from "../state/WalletContext";
import { motion } from "framer-motion";

export default function Marketplace() {
  const [listings, setListings] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bootLoading, setBootLoading] = useState(true);
  const { isConnected, principal, balance, setBalance } = useWallet();

  const load = async () => {
    const res = await getListings();
    setListings(res);
    setBootLoading(false);
  };
  useEffect(() => { load(); }, []);

  const onBuy = (l) => setSelected(l);

  const onConfirm = async (kWh) => {
    try {
      if (!isConnected) throw new Error("Connect your wallet first.");
      const cost = kWh * selected.price;
      if (balance < cost) throw new Error("Insufficient balance.");

      setLoading(true);
      const res = await buyEnergy({ listingId: selected.id, kWh, principal });
      if (res?.ok) {
        setBalance(balance - cost);
        await load();
        setSelected(null);
      } else {
        throw new Error(res?.message || "Purchase failed");
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 md:px-8 py-12">
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900">⚡ Marketplace</h3>
        <p className="text-sm text-gray-700 glass px-3 py-1 rounded-xl">Browse live listings & buy energy</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {bootLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-6 rounded-2xl glass">
                <div className="h-6 w-2/3 skeleton rounded-md" />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="h-16 skeleton rounded-xl" />
                  <div className="h-16 skeleton rounded-xl" />
                </div>
                <div className="mt-6 h-10 skeleton rounded-xl" />
              </div>
            ))
          : listings.map((l) => <ListingCard key={l.id} listing={l} onBuy={onBuy} />)}
      </div>

      <BuyModal
        open={!!selected}
        listing={selected}
        onClose={() => setSelected(null)}
        onConfirm={onConfirm}
      />

      {loading && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-4 right-4 glass rounded-xl px-4 py-2"
        >
          Processing…
        </motion.div>
      )}
    </section>
  );
}
