import { useEffect, useState } from "react";

// useState backed by localStorage. `validate` guards against stale/invalid saved values.
export default function usePersistedState(key, fallback, validate = () => true) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null && validate(saved) ? saved : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* storage unavailable */
    }
  }, [key, value]);

  return [value, setValue];
}
