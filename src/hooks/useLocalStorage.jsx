import { useState, useEffect } from "react";

const getLocalValue = (key, initValue) => {
  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue !== null) return localValue;

  if (initValue instanceof Function) return initValue();

  return initValue;
};

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
