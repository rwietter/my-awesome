import { FC } from 'react';
import { styled } from '@/styles/theme';

interface Props {
	size?: string | number;
	fontWeight?: number;
	fontFamily?: string;
	color?: string;
}

const TextCSS: FC<Props> = (
  {
    children,
    size = '$5',
    fontWeight = 400,
    fontFamily = '$secondary',
    color = '$gray50',
  },
  props,
) => {
  const Text = styled('p', {
    fontSize: size,
    fontWeight,
    fontFamily,
    color,
  });

  return <Text {...props}>{children}</Text>;
};

export { TextCSS };
