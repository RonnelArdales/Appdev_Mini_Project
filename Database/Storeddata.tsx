import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key:string, value:string) => {
    try {
    return  await AsyncStorage.setItem(key , value)
    } catch (e) {
      // saving error
    }
  }

  
export const getData = async (key:string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
    return value;
      }
    } catch(e) {
      // error reading value
    }
  }

  export const removevalue = async (key:string) => {
    try {
        await AsyncStorage.removeItem('@MyApp_key');
        return true;
    } catch(e) {
      // error reading value
    }
  }