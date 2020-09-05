import React, { useState, useEffect } from 'react';

export const Auction = () => {
  const [titleName] = useState('Аукцион');

  useEffect(() => {
    document.title = `${titleName}`;
  });

  return (
    <div>
      <h1>Аукцион</h1>
    </div>
  );
};
