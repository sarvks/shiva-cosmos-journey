import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Framing = "devotional" | "philosophical" | "historical";

type ModeState = {
  scholar: boolean;
  devotional: boolean;
  meditation: boolean;
  setScholar: (v: boolean) => void;
  setDevotional: (v: boolean) => void;
  setMeditation: (v: boolean) => void;
};

const ModeContext = createContext<ModeState | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [scholar, setScholar] = useState(false);
  const [devotional, setDevotional] = useState(false);
  const [meditation, setMeditation] = useState(false);

  const value = useMemo(
    () => ({ scholar, devotional, meditation, setScholar, setDevotional, setMeditation }),
    [scholar, devotional, meditation],
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode(): ModeState {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    return {
      scholar: false,
      devotional: false,
      meditation: false,
      setScholar: () => {},
      setDevotional: () => {},
      setMeditation: () => {},
    };
  }
  return ctx;
}
