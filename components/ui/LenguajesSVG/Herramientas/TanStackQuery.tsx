import React from 'react';

const TanStackQuery = ({ width = 64 }: { width?: string | number }) => (
  <svg viewBox="0 0 256 256" width={width} height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z" fill="#FF4154"/>
    <path d="M179.5 76.5c-10-10-25-15-40-15-40 0-72.5 32.5-72.5 72.5 0 20 8.5 38 22.5 50.5-5 7.5-8 16.5-8 26.5 0 30 25 55 55 55 15 0 28-5.5 38-15 10 10 23 15 38 15 30 0 55-25 55-55 0-30-25-55-55-55-10 0-20 2.5-28 7.5 12-15 19-33.5 19-53.5 0-15-5.5-28.5-15-38.5z" fill="white"/>
  </svg>
);

export default TanStackQuery;