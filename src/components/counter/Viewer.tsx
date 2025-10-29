'use client';
import { useCount, useCountStore } from '@/stores/count';
import React from 'react';

const Viewer = () => {
  const count = useCount();
  return <div className='text-4xl font-bold'>{count}</div>;
};

export default Viewer;
