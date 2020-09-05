import React, { useState, useEffect } from 'react';

export const About = () => {
  const [titleName] = useState('О проекте');

  useEffect(() => {
    document.title = `${titleName}`;
  });
  return (
    <div>
      <h1> {titleName} </h1>
    </div>
  );
};
