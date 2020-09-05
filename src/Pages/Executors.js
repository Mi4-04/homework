import React, { useState, useEffect } from 'react';

export const Executors = () => {
  const [titleName] = useState('Исполнители');

  useEffect(() => {
    document.title = `${titleName}`;
  });
  return (
    <div>
      <h1> Рейтинг заказчиков</h1>
    </div>
  );
};
