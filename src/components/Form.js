import { Input } from './Input';
import React, { useState } from 'react';
import {
  isDateNotInPast,
  validateEmail,
  validateIfValueHasLength,
} from '../utils/functions/functions';
import { Button } from './Button';
import { TextArea } from './TextArea';

let currentDate = new Date().toJSON().slice(0, 10);

export const Form = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    date: currentDate,
    description: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    setFormFields(e);
  };
  const handleSubmit = e => {
    if (!formHasErrors()) {
      return;
    }
    e.preventDefault();
  };

  const validationData = {
    name: validateIfValueHasLength,
    email: validateEmail,
    date: isDateNotInPast,
  };

  const formHasErrors = () => {
    const validationArray = Object.entries(validationData).map(
      ([field, validationFunction]) => {
        setErrors(prev => ({
          ...prev,
          [field]: validationFunction(formFields[field]),
        }));
        return !!validationFunction(formFields[field]);
      }
    );
    return validationArray.includes(true);
  };

  return (
    <div className={'border rounded-md p-3 text-customDark'}>
      <h5 className={'font-bold text-lg mb-1'}>Book your campervan now</h5>
      <p className={'mb-3'}>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit} className={'flex flex-col gap-3'}>
        <Input
          id="name"
          error={errors.name}
          placeholder="Name"
          value={formFields.name}
          className={'p-4'}
          onChange={e => {
            setErrors({ ...errors, name: '' });
            handleChange({ ...formFields, name: e });
          }}
        />
        <Input
          id="email"
          error={errors.email}
          placeholder="Email"
          value={formFields.email}
          className={'p-4'}
          onChange={e => {
            setErrors({ ...errors, email: '' });
            handleChange({ ...formFields, email: e });
          }}
        />
        <Input
          id="date"
          error={errors.date}
          placeholder="Booking date"
          value={formFields.date}
          className={'p-4'}
          onChange={e => {
            setErrors({ ...errors, date: '' });
            handleChange({ ...formFields, date: e });
          }}
          type={'date'}
          min={currentDate}
        />
        <TextArea
          id="comment"
          placeholder="Comment"
          value={formFields.comment}
          className={'p-4'}
          rows={4}
          onChange={e => handleChange({ ...formFields, comment: e })}
        />
        <Button type={'submit'} variant={'primary'}>
          Send
        </Button>
      </form>
    </div>
  );
};
