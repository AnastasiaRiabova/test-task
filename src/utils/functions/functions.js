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

export const validateIfValueHasLength = value => {
  if (value.length <= 0) {
    return {
      error: value.length <= 0,
      message: 'Can not be empty',
    };
  }
};

export const validateEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return {
      error: regex.test(email),
      message:
        'Please enter a valid email address. For example "johndoe@domain.com" ',
    };
  }
};

export const isDateNotInPast = dateString => {
  const inputDate = new Date(dateString);
  const today = new Date();
  if (!(inputDate >= today)) {
    return {
      error: inputDate >= today,
      message: 'Please enter a valid date',
    };
  }
};
