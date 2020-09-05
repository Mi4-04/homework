import React, { useState, useEffect } from 'react';

export const Orders = () => {
  const [titleName] = useState('Заказы');

  useEffect(() => {
    document.title = `${titleName}`;
  });
  return (
    <div>
      <h1>Список заказов</h1>
    </div>
  );
};
