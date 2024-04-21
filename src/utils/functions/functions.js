import { filterMap, fullObjectProperties, typeMap } from './variables';

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

export const validateStringLength = value => {
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

export const filterCampers = (campers, filters) => {
  return campers.filter(camper => {
    if (
      filters?.location &&
      !camper?.location.toLowerCase().includes(filters?.location.toLowerCase())
    ) {
      return false;
    }

    if (filters?.type && camper.form !== typeMap[filters?.type]) {
      return false;
    }
    const campersFilterValue =
      camper.transmission === 'automatic'
        ? { ...camper.details, automatic: 'automatic' }
        : camper.details;
    for (let key in filters) {
      if (key === 'type' || key === 'location') {
        continue;
      }
      if (key !== 'type' && !campersFilterValue[filterMap[key] || key]) {
        return false;
      }
    }
    return true;
  });
};
