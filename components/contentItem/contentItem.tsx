import { FC } from 'react';
import { IsOk } from '../../types';

import { Heading } from '@/features/ui/heading';
import { Tooltip } from '@/features/ui/tooltip';
import { PageLink, PageSectionItem } from '@/features/ui';
import { NoContent } from '@/features/ui/';

interface ContentProps {
	pageIndex: string[];
	pageContent: any;
	isOk: IsOk;
}

export type LinkProps = {
	name: string;
	url: string;
};

const ContentItem: FC<ContentProps> = ({
  pageIndex,
  pageContent = [],
  isOk,
}) => (
	<div>
		{(isOk.isLoading || isOk.isError) && <NoContent />}
		{pageIndex?.map((value: string) => (
			<PageSectionItem key={value}>
				<Heading id={value.toLowerCase()} type="h3" weight={400}>
					{(!isOk.isLoading || isOk.isError) && value}
				</Heading>
				<ul>
					{(!isOk.isLoading || isOk.isError)
						&& pageContent
						&& pageContent[value]?.map(({ name, url }: LinkProps, idx: number) => (
							<li key={idx.toString()}>
								<Tooltip message={url}>
									<PageLink href={url} target="_blank">
										{name}
									</PageLink>
								</Tooltip>
							</li>
						))}
				</ul>
			</PageSectionItem>
		))}
	</div>
);

export { ContentItem };
