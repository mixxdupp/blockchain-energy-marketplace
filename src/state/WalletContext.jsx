import { createContext, useContext, useMemo, useState } from "react";

const WalletCtx = createContext(null);

export function WalletProvider({ children }) {
  // Frontend-only state for now; later you’ll hydrate from ICP calls
  const [principal, setPrincipal] = useState(null);
  const [balance, setBalance] = useState(500); // demo credits/tokens
  const [isConnected, setIsConnected] = useState(false);

  const connect = async () => {
    // TODO: plug in Internet Identity or your wallet flow
    setPrincipal("principal-demo-123");
    setIsConnected(true);
  };

  const disconnect = () => {
    setPrincipal(null);
    setIsConnected(false);
  };

  const value = useMemo(
    () => ({ principal, balance, setBalance, isConnected, connect, disconnect }),
    [principal, balance, isConnected]
  );

  return <WalletCtx.Provider value={value}>{children}</WalletCtx.Provider>;
}

export const useWallet = () => useContext(WalletCtx);
