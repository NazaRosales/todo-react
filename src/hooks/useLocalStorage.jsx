import { useState } from "react";
const useLocalStorage = (itemKey, initialValue) => {
  const storageItem = localStorage.getItem(itemKey);
  let parsedItem;
  if (!storageItem) {
    localStorage.setItem(itemKey, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(storageItem);
  }

  const [item, setItem] = useState(parsedItem);
  const saveItem = (newItem) => {
    localStorage.setItem(itemKey, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
};
export { useLocalStorage };
