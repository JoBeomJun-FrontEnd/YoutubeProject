import { useEffect } from 'react';
import React, { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();

  useEffect(() => {}, []);
  return <div>videos {keyword ? `🔍${keyword}` : '🔥'}</div>;
}
