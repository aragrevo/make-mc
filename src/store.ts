import {writable} from 'svelte/store';

export const APP_STATUS = {
  INIT: 0,
  LOADING: 1,
  BUILD: 2,
  ERROR: -1,
  DONE: 3,
};

export const STEPS = {
  INITIALIZER: 0,
  SEASONING: 1,
  SALAD: 2,
  ADDON: 3,
  FINISHER: 4,
  DONE: 5,
};

export const appStatus = writable(APP_STATUS.INIT);
export const burger = writable<IBurger>();
export const step = writable(STEPS.INITIALIZER);

export const updateStep = (nextStep: number) => {
  step.set(nextStep);
};

export const setAppStatusLoading = () => {
  appStatus.set(APP_STATUS.LOADING);
};

export const setAppStatusDone = () => {
  appStatus.set(APP_STATUS.DONE);
};

export const updateBurger = (data: IBurger) => {
  burger.set(data);
};

export const setBurger = (data: IBurger) => {
  burger.set(data);
  appStatus.set(APP_STATUS.BUILD);
  step.set(STEPS.INITIALIZER);
};

export interface IBurger {
  name: string;
  bread: IBread;
  sauces: ISauces[];
  salad: ISalad[];
  meat: IMeat[];
  addOns: IAddOn[];
}

export enum IAddOn {
  'Bacon',
  'Elemental',
  'Cheddar',
}

export enum ISauces {
  'Ketchup',
  'Mostarda',
  'Maionese',
  'Molho BigMac',
  'Molho Tasty',
  'Molho Bacon',
  'Molho CBO',
}

export enum ISalad {
  'Alface',
  'Apolo',
  'Pepino',
  'Cebola Fresca',
  'Cebola Frita',
  'Tomate',
}

export enum IBread {
  'TexMex',
  'Royal',
  'BigMac',
  'Premium',
  'Reg',
}
export enum IMeat {
  'Royal',
  'Reg',
  'Myshtic',
  'Chicken',
  'Delight',
  'Crispy',
}
