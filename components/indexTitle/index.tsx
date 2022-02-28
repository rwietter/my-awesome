import { FC } from 'react';
import { IsOk } from '../../types';

import { PageIndiceRef } from '../../pages/v1/home/styled';

interface IndexTitleProps {
	pageIndex: string[];
	isOk: IsOk;
}

const IndexTitle: FC<IndexTitleProps> = ({ pageIndex, isOk }) => (
	<ul>
		{!isOk.isLoading ? (
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
