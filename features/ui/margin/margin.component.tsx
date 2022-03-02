/* eslint-disable react/button-has-type */

import { FC } from 'react';
import { styled } from '@/features/ui/theme';

interface MarginCSSProps {
	right?: string;
	left?: string;
	top?: string;
	bottom?: string;
	margin?: string;
}

const Margin: FC<MarginCSSProps> = ({
  right = 0,
  top = 0,
  left = 0,
  bottom = 0,
  margin = 0,
}) => {
  const MarginCSS = styled('div', {
    marginRight: `${right}rem`,
    marginLeft: `${left}rem`,
    marginBottom: `${bottom}rem`,
    marginTop: `${top}rem`,
    margin,
  });
  return <MarginCSS />;
};

export { Margin };
