import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { Center } from '../untils/interfaces';
import { getCenter } from '../untils/localStorage';
function useStore() {
  const [center, setCenter] = useState<Center>();
  return { center, setCenter };
}

export const Store = createContainer(useStore);
