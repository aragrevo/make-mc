import {IBread, ISauces, type IBurger, ISalad, IAddOn, IMeat} from 'src/store';

export const burgers: IBurger[] = [
  {
    name: 'CBO',
    bread: IBread.TexMex,
    sauces: [ISauces.CBO],
    salad: [ISalad['Cebola Frita'], ISalad.Alface],
    addOns: [IAddOn.Bacon, IAddOn.Cheddar],
    meat: [IMeat.Myshtic],
  },
  {
    name: 'Tasty',
    bread: IBread.TexMex,
    sauces: [ISauces.Tasty],
    salad: [ISalad['Cebola Fresca'], ISalad.Alface, ISalad.Tomate],
    meat: [IMeat.Royal],
    addOns: [IAddOn.Elemental],
  },
  {
    name: 'Cheeseburger',
    bread: IBread.Reg,
    sauces: [ISauces.Ketchup, ISauces.Mostarda],
    salad: [ISalad.Pepino],
    addOns: [IAddOn.Cheddar],
    meat: [IMeat.Reg],
  },
  {
    name: 'Double Cheeseburger',
    bread: IBread.Reg,
    sauces: [ISauces.Ketchup, ISauces.Mostarda],
    salad: [ISalad.Pepino],
    addOns: [IAddOn.Cheddar],
    meat: [IMeat.Reg],
  },
  {
    name: 'Chicken Bacon',
    bread: IBread.Reg,
    sauces: [ISauces.Bacon],
    salad: [],
    addOns: [IAddOn.Bacon],
    meat: [IMeat.Chicken],
  },
  {
    name: 'BigMac',
    bread: IBread.BigMac,
    sauces: [ISauces.BigMac],
    salad: [ISalad.Pepino, ISalad.Alface],
    addOns: [IAddOn.Cheddar],
    meat: [IMeat.Reg],
  },
  {
    name: 'Crispy Original',
    bread: IBread.Premium,
    sauces: [ISauces.Maionese],
    salad: [ISalad.Apolo, ISalad.Tomate],
    addOns: [],
    meat: [IMeat.Crispy],
  },
  {
    name: 'Royal Bacon',
    bread: IBread.Royal,
    sauces: [ISauces.Bacon],
    salad: [],
    addOns: [IAddOn.Cheddar, IAddOn.Bacon],
    meat: [IMeat.Royal],
  },
  {
    name: 'Royal Deluxe',
    bread: IBread.Royal,
    sauces: [ISauces.Maionese],
    salad: [ISalad.Alface, ISalad.Tomate],
    addOns: [IAddOn.Cheddar],
    meat: [IMeat.Royal],
  },
  {
    name: 'Royal Cheese',
    bread: IBread.Royal,
    sauces: [ISauces.Ketchup, ISauces.Mostarda],
    salad: [ISalad.Pepino, ISalad['Cebola Fresca']],
    addOns: [IAddOn.Cheddar],
    meat: [IMeat.Royal],
  },
  {
    name: 'McChicken',
    bread: IBread.Royal,
    sauces: [ISauces.Maionese],
    salad: [ISalad.Alface],
    addOns: [],
    meat: [IMeat.Chicken],
  },
];
