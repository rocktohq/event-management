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

// Remove Data from the Local Storage
const removeLocalStorageData = (option, id) => {
  const localStorageData = getLocalStorageData(option);

  if (localStorageData.includes(id)) {
    const newData = localStorageData.filter(data => data !== id);
    localStorage.setItem(option, JSON.stringify(newData));
    return true;
  }
}

export { getLocalStorageData, saveLocalStorageData, removeLocalStorageData };