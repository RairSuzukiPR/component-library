import { customAlphabet } from 'nanoid';
import { useState } from 'react';

const nanoid = customAlphabet('1234567890abc', 10);

export const useUniqueID = (): string => {
  const [id] = useState(nanoid());

  return id;
};
