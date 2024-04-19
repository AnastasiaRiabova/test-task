import { Button } from './Button';
import React from 'react';

export const Error = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className="flex items-center justify-center w-full h-[80vh] flex-col ">
      <h1 className="pb-4">Something went wrong</h1>
      <Button onClick={reloadPage}>Reload page</Button>
    </div>
  );
};
