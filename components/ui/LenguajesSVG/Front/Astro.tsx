import React from 'react';

const Astro = ({ width = 64 }: { width?: string | number }) => (
  <svg viewBox="0 0 256 256" width={width} height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="128" fill="#FF5C01"/>
    <path d="M128 50L50 190h156L128 50z" fill="white"/>
    <path d="M128 90l-40 70h80L128 90z" fill="#FF5C01"/>
  </svg>
);

export default Astro;