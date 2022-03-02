/* eslint-disable react/button-has-type */

import { FC } from 'react';
import { styled } from '@/features/ui/theme';

interface MarginCSSProps {
	marginRight?: string;
	marginLeft?: string;
	marginTop?: string;
	marginBottom?: string;
	margin?: string;
}

const Margin: FC<MarginCSSProps> = ({
  marginRight = '0',
  marginTop = 0,
  marginLeft = '0',
  marginBottom = 0,
  margin = '0',
}) => {
  const MarginCSS = styled('div', {
    marginRight,
    marginLeft,
    marginBottom,
    marginTop,
    margin,
  });
  return <MarginCSS />;
};

export { Margin };
