import { ITEMS } from './ITEMS';

export const getItem = (itemId) => ITEMS.find((item) => item.id == itemId);

export const getItemCategory = (categoria) => {
  return ITEMS.filter((item) => item.categoria == categoria);
};
