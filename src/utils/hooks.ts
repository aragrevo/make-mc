import {writable} from 'svelte/store';
import {IAddOn, IBread, IMeat, ISalad, ISauces, updateBurger} from 'src/store';

export const ingredients = writable(getIngredients());
function getIngredients() {
  let breads = Object.values(IBread).filter(v => typeof v === 'string');
  let sauces = Object.values(ISauces).filter(v => typeof v === 'string');
  let salads = Object.values(ISalad).filter(v => typeof v === 'string');
  let addons = Object.values(IAddOn).filter(v => typeof v === 'string');
  let meats = Object.values(IMeat).filter(v => typeof v === 'string');

  return {breads, sauces, salads, addons, meats};
}

export function useToggle(initState: boolean) {
  let isOpen = writable(initState);
  function onToggle() {
    isOpen.update(isOpen => (isOpen = !isOpen));
  }
  return {isOpen, onToggle};
}

export function useValidate(value: string, enumType: any, property: any[]) {
  const name = value;
  const item = enumType[name];

  if (!property.includes(item)) return null;
  return {name, item};
}
