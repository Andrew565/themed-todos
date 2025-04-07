import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeItem = async (key: string, value: string | object) => {
  value = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("Error while saving:", e);
  }
};

export const readItem = async (key: string) => {
  try {
    const retVal = await AsyncStorage.getItem(key);
    return retVal ? JSON.parse(retVal) : null;
  } catch (e) {
    console.log("Error while retrieving:", e);
  }
};

export const store = {
  storeItem,
  readItem,
};
