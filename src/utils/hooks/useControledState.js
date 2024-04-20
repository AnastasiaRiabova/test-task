import { useEffect, useState } from 'react';

export const useControlledState = (value, setValue) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(value);

  useEffect(() => {
    setUncontrolledValue(value);
  }, [value]);

  if (typeof setValue === 'function') {
    return [value, setValue];
  }

  return [uncontrolledValue, setUncontrolledValue];
};
