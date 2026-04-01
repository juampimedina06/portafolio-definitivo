import React from 'react';

const NextJS = ({ width = 64 }: { width?: string | number }) => (
  <svg viewBox="0 0 256 256" width={width} height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M204.8 230.4L128 204.8 51.2 230.4V25.6l76.8-25.6 76.8 25.6V230.4z" fill="black"/>
    <path d="M128 204.8v-102.4L51.2 128v76.8l76.8-25.6v25.6z" fill="#666"/>
    <path d="M128 102.4v102.4l76.8-25.6V76.8L128 102.4z" fill="white"/>
  </svg>
);

export default NextJS;