import React from 'react';

const ChartJS = ({ width = 64 }: { width?: string | number }) => (
  <svg viewBox="0 0 256 256" width={width} height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="120" fill="#FF6384"/>
    <path d="M80 180 L128 100 L176 150 L200 120" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default ChartJS;