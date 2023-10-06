import React from 'react';
import { useUniqueID } from '../utils/useUniqueID';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';

interface FieldProps {
  children: React.ReactNode;
}
interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}
export const Field: React.FC<FieldProps> & FieldComposition = ({
  children,
}) => {
  const id = useUniqueID();
  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
