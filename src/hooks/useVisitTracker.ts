import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { DEFAULT_PREFS, STORAGE_KEYS, type SitePrefs } from "../lib/storage";

export function useVisitTracker() {
  const [prefs, setPrefs] = useLocalStorage<SitePrefs>(
    STORAGE_KEYS.prefs,
    DEFAULT_PREFS
  );

  useEffect(() => {
    setPrefs((p) => ({ ...p, lastVisit: new Date().toISOString() }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return prefs;
}
