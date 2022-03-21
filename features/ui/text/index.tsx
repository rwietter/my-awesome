import { DetailsHTMLAttributes, FC, ReactNode } from 'react';
import { styled } from '@/features/ui/theme';

interface Props extends DetailsHTMLAttributes<HTMLParagraphElement> {
	children: ReactNode;
	font?: 'sm' | 'md' | 'lg' | 'xl';
	textColor?: 'text' | 'dark' | 'white' | 'link';
	display?: 'inline' | 'block';
}

const Text = styled('p', {
  fontSize: '$5',
  margin: 0,
  fontFamily: '$secondary',
  fontWeight: 600,
  variants: {
    font: {
      sm: {
        fontSize: '$5',
        fontWeight: '300',
      },
      md: {
        fontSize: '$6',
        fontWeight: '400',
      },
      lg: {
        fontSize: '$7',
        fontWeight: '600',
      },
      xl: {
        fontSize: '$10',
        fontWeight: '800',
      },
    },
    textColor: {
      text: {
        color: '$gray50',
      },
      dark: {
        color: '$dark',
      },
      white: {
        color: '$white',
      },
      link: {
        color: '$green',
        cursor: 'pointer',
      },
    },
    display: {
      inline: {
        display: 'inline',
      },
      block: {
        display: 'block',
      },
    },
  },
});

const TextCSS: FC<Props> = ({ children, ...props }) => (
	<Text {...props}>{children}</Text>
);

export { TextCSS };
