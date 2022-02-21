import { FC } from 'react';

import { PageIndiceRef } from '../homepage/styled';

interface IndexTitleProps {
  pageIndex: string[]
}

const IndexTitle: FC<IndexTitleProps> = ({ pageIndex }) => (
	<ul>
		{pageIndex ? (
        pageIndex?.map((item: string, idx) => (
	<span key={idx}>
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
