import { fullObjectProperties } from './variables';

export const searchParamsToObject = searchParams => {
  const params = {};
  if (searchParams instanceof URLSearchParams) {
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
  }
  return params;
};

export const calculateTags = object => {
  return Object.entries(object).map(([key, value]) => ({
    key:
      key === 'transmission'
        ? fullObjectProperties[value]
        : fullObjectProperties[key] || key,
    value: value,
  }));
};
