import React, { FC } from 'react';
import {
  StyledArrow, StyledContent, TooltipCSS, TooltipTrigger,
} from './styled';

interface Props {
  message: string;
}

const Tooltip: FC<Props> = ({ children, message }) => (
  <TooltipCSS delayDuration={200}>
    <TooltipTrigger asChild>{children}</TooltipTrigger>
    <StyledContent sideOffset={5}>
      {message}
      <StyledArrow />
    </StyledContent>
  </TooltipCSS>
);

export { Tooltip };
