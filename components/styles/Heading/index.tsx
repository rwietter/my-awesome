import { css, styled } from '@stitches/react';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

interface Props {
  id?: string;
  type?: "h1" | "h2" | "h3" | "h4";
  weight?: number;
  fontsize?: string;
  fontfamily?: string;
  color?: string;
}

const getStyle = ({ weight = 600, fontsize = '$5', fontfamily = '$secondary', color = '$gray50' }: Props) => {
  return css({
    color: color,
    fontFamily: fontfamily,
    fontWeight: weight,
    fontSize: `${fontsize}`,
  });
};

const Heading: FC<Props> = ({ children, type = "h1", weight, fontsize, fontfamily, color, id }, ...props) => {
  const Title = styled(type, getStyle({ weight, fontsize, fontfamily, color }));
  return (
    <Title {...props} id={id}>
      {children}
    </Title>
  );
};

export { Heading };
