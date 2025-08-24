// Toggle mocks vs real calls
const USE_MOCK = true;

// === MOCK DATA ===
let MOCK_LISTINGS = [
  { id: 1, name: "GreenPower Co.", energy: 120, price: 0.15 },
  { id: 2, name: "Solar Hive",     energy:  90, price: 0.12 },
  { id: 3, name: "WindyGrid",      energy: 150, price: 0.18 },
];

export async function getListings() {
  if (USE_MOCK) return structuredClone(MOCK_LISTINGS);

  // ===== Real ICP wiring (later) =====
  // import { HttpAgent, Actor } from "@dfinity/agent";
  // const agent = new HttpAgent({ host: "http://localhost:4943" });
  // const actor = Actor.createActor(idlFactory, { agent, canisterId });
  // return await actor.getListings();
}

export async function buyEnergy({ listingId, kWh, principal }) {
  if (USE_MOCK) {
    const idx = MOCK_LISTINGS.findIndex(l => l.id === listingId);
    if (idx === -1) throw new Error("Listing not found");
    if (MOCK_LISTINGS[idx].energy < kWh) throw new Error("Not enough energy");
    MOCK_LISTINGS[idx] = { ...MOCK_LISTINGS[idx], energy: MOCK_LISTINGS[idx].energy - kWh };
    return { ok: true, message: "Purchase successful (mock)!" };
  }

  // ===== Real ICP wiring (later) =====
  // return await actor.buyEnergy(listingId, principal, kWh);
}

export async function getBalance(principal) {
  if (USE_MOCK) {
    // You’ll derive this from context in UI; provided for symmetry
    return { balance: 500 };
  }

  // ===== Real ICP wiring (later) =====
  // return await actor.getBalance(principal);
}
