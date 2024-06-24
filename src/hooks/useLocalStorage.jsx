import { useEffect, useState } from "react";

const useLocalStorage = (itemKey, initialValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const storageItem = localStorage.getItem(itemKey);
        if (!storageItem) {
          localStorage.setItem(itemKey, JSON.stringify(initialValue));
        } else {
          setItem(JSON.parse(storageItem));
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 3000);
  }, [itemKey, initialValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemKey, JSON.stringify(newItem));
    setItem(newItem);
  };
  return { item, saveItem, loading, error };
};
export { useLocalStorage };
