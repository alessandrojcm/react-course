import React, { useEffect, useState } from 'react';

import { useResources } from '../utils/useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul className={'ui list'}>
      {resources.map((re) => (
        <li className={'item'} key={re.id}>
          {re.title}
        </li>
      ))}
    </ul>
  );
};

export default ResourceList;
