import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '@/features/ui/theme';

const SwitchCSS = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 20,
  background: '$gray300',
  margin: '0 0.5rem',
  borderRadius: '9999px',
  cursor: 'pointer',
  position: 'relative',
  boxShadow: '0 2px 10px $gray400',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: '0 0 0 2px $gray400' },
  '&[data-state="checked"]': { background: '$gray400' },
});

const ThumbCSS = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  background: '$buttonThumb',
  borderRadius: '9999px',
  boxShadow: '0 2px 2px $gray300',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

const Flex = styled('div', { display: 'flex' });

export { Flex, ThumbCSS, SwitchCSS };
