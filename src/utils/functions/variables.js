import {
  ac,
  adults,
  air_conditioner,
  alcove,
  automatic,
  beds,
  cd,
  freezer,
  fully_integrated,
  gas,
  hob,
  kitchen,
  microwave,
  petrol,
  radio,
  shower,
  toilet,
  tv,
  van,
  water,
} from '../../assets/icons';
import { Icon } from '../../components/Icon';

export const fullObjectProperties = {
  adults: { name: 'Adults', icon: adults },
  CD: { name: 'CD', icon: cd },
  automatic: { name: 'Automatic', icon: automatic },
  airConditioner: { name: 'Air conditioner', icon: air_conditioner },
  bathroom: { name: 'Bathroom', icon: automatic },
  beds: { name: 'Transmission', icon: beds },
  kitchen: { name: 'Kitchen', icon: kitchen },
  engine: { name: 'Petrol', icon: petrol },
  freezer: { name: 'Freezer', icon: freezer },
  gas: { name: 'Gas', icon: gas },
  hob: { name: 'Hob', icon: hob },
  microwave: { name: 'Microwave', icon: microwave },
  shower: { name: 'Shower', icon: shower },
  toilet: { name: 'Toiler', icon: toilet },
  water: { name: 'Water', icon: water },
  radio: { name: 'Radio', icon: radio },
  TV: { name: 'TV', icon: tv },
};

export const typeMap = {
  ['fully integrated']: 'fullyIntegrated',
  van: 'panelTruck',
  alcove: 'alcove',
};

export const filterMap = {
  ac: 'airConditioner',
  tv: 'TV',
};

export const typeMapFilter = {
  Van: <Icon icon={van} fill="none" />,
  ['Fully Integrated']: <Icon icon={fully_integrated} fill="none" />,
  Alcove: <Icon icon={alcove} fill="none" />,
};

export const equipmentMap = {
  Ac: <Icon icon={ac} fill="none" />,
  Automatic: <Icon icon={automatic} fill="none" />,
  Kitchen: <Icon icon={kitchen} fill="none" />,
  TV: <Icon icon={tv} fill="none" />,
  'Shower/WC': <Icon icon={shower} fill="none" />,
};
