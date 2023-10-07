// Get Data from the Local Storage
const getLocalStorageData = (option) => {
  const localStorageData = localStorage.getItem(option);

  if (localStorageData) {
    return JSON.parse(localStorageData);
  }
  else {
    return [];
  }
}

// Save Data to the Local Storage
const saveLocalStorageData = (id, option) => {
  const localStorageData = getLocalStorageData(option);

  if (localStorageData.includes(id)) return true;

  localStorageData.push(id);
  localStorage.setItem(option, JSON.stringify(localStorageData));
}

export { getLocalStorageData, saveLocalStorageData };