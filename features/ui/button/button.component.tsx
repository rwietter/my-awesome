/* eslint-disable react/button-has-type */

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import * as S from './styled';

interface ButtonCSSProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	type: 'button' | 'submit' | 'reset';
	color: 'primary' | 'secondary' | 'tertiary';
}

const Button: FC<ButtonCSSProps> = ({ children, type = 'button', ...props }) => (
	<S.ButtonContainerCSS>
		<S.ButtonCSS type={type} {...props}>
			<S.ButtonTextCSS>{children}</S.ButtonTextCSS>
  </S.ButtonCSS>
 </S.ButtonContainerCSS>
);

export { Button };
