import { useEffect, useState } from 'react';

import api from './api';

export const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async (resource) => {
      const { data } = await api.get(resource);
      setResources(data);
    };
    fetchData(resource);
  }, [resource]);

  return resources;
};
