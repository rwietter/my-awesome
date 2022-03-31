import { IsOk } from 'types'

export interface FechListProps {
  awesomeName: string;
  id: string;
}

export interface ContentState {
	title: string;
	content: '';
	titleId: '';
}

export interface UseFetchAwesomeReturnProps {
	isOk: IsOk;
	content: string;
	title: string;
	titleId: string;
}
