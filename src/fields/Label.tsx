import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import * as S from './styles';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return <S.StyledLabel ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';
