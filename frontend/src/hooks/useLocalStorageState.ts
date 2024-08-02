import { useSyncExternalStore } from "react";

const cache = new Map();

export const useLocalStorageState = ({
  key,
  initialValue,
}: {
  key: string;
  initialValue: unknown;
}) => {
  const getSnapshot = () => {
    const item = window.localStorage.getItem(key);
    if (!item) {
      return initialValue;
    }
    if (!cache.has(item)) {
      const value = JSON.parse(item);
      cache.set(item, value);
    }
    return cache.get(item);
  };

  const subscribe = (callback: () => void) => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === window.localStorage && e.key === key) {
        callback();
      }
    };
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  };

  const localStorageState = useSyncExternalStore(subscribe, getSnapshot);

  const setLocalStorageState = (value: unknown) => {
    const newValue = JSON.stringify(value);
    window.localStorage.setItem(key, newValue);
    window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
  };

  return [localStorageState, setLocalStorageState] as const;
};
