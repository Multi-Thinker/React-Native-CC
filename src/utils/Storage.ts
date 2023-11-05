import AsyncStorage from '@react-native-async-storage/async-storage';
import {Cards, JSONObject} from '../../types/Cards';

export const storeItems = async (
  payload: JSONObject | Cards[] | Cards,
  flush = false,
) => {
  const items = await AsyncStorage.getItem('items');
  let itemsArray = flush ? payload ?? [] : items ? JSON.parse(items) : [];
  if (!flush) {
    itemsArray.push(payload);
  }
  await AsyncStorage.setItem('items', JSON.stringify(itemsArray));
  return true;
};

export const getItems = async () => {
  try {
    const value = await AsyncStorage.getItem('items');
    return JSON.parse(value);
  } catch (error) {
    throw Error(error);
  }
};

export const deleteItem = async (card: number | string) => {
  const value = await AsyncStorage.getItem('items');
  const items: Cards[] = JSON.parse(value);
  const newItems = items.filter(item => item.number !== card);
  await storeItems(newItems, true);
};
