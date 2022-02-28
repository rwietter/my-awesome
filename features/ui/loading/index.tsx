import { CSS } from '@stitches/react';
import { InfinityChrome, Load } from './style';

export const Loading = (props: CSS) => (
  <InfinityChrome className="infinityChrome" css={{ ...props }}>
    <Load />
    <Load />
    <Load />
  </InfinityChrome>
);
