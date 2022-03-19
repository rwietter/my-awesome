import { IsOk } from 'types';

export interface MarkdownRenderProps {
	content: string;
  isOk: IsOk;
  fontSize: 'increment' | 'decrement' | 'normal';
}
