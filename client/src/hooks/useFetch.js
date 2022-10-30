import { useState, useCallback } from 'react';

const useFetch = (url, initialState = null) => {
  if (!url) throw new Error('Please provide url');

  const [data, setData] = useState(initialState);

  const fetchData = useCallback(async () => {
    const data = await fetch(url);
    const parsedData = await data.json();
    
    setData(parsedData);
  }, [url]);

  return [data, fetchData];
};

export default useFetch;