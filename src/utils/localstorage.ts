export const getLocalStorage = (key: string): any => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
