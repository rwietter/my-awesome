import { FC } from 'react';

import { PageIndiceRef } from '../homepage/styled';

interface IndexTitleProps {
	pageIndex: string[];
	isLoading: boolean;
}

const IndexTitle: FC<IndexTitleProps> = ({ pageIndex, isLoading }) => (
	<ul>
		{!isLoading ? (
		  pageIndex?.map((item: string, idx) => (
				<span key={idx.toString()}>
					<PageIndiceRef>
						<a href={`#${item.toLowerCase()}`}>{item}</a>
					</PageIndiceRef>
				</span>
		  ))
		) : (
			<div />
		)}
	</ul>
);

export { IndexTitle };
