import React from 'react';
import * as S from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <S.StyledButton
        ref={ref}
        type="button"
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        {...props}
      >
        {children}
      </S.StyledButton>
    );
  },
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'small',
  isFullWidth: false,
};

Button.displayName = 'button';
