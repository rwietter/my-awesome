import { FC } from 'react';

import { Heading } from '../styles/Heading';
import { PageLink } from '../styles/PageLink';
import { PageSectionItem } from '../styles/PageSectionItem';
import { Tooltip } from '../tooltip';

interface ContentProps {
	pageIndex: string[];
	pageContent: any;
}

export type LinkProps = {
	name: string;
	url: string;
};

const ContentItem: FC<ContentProps> = ({ pageIndex, pageContent }) => (
	<div>
		{pageIndex?.map((value: string) => (
			<PageSectionItem key={value}>
				<Heading id={value.toLowerCase()} type="h3" weight={400}>
					{value}
				</Heading>
				<ul>
					{pageContent ? (
						pageContent[value]?.map(
							({ name, url }: LinkProps, idx: number) => (
								<li key={idx}>
									<Tooltip message={url}>
										<PageLink href={url} target="_blank">
											{name}
										</PageLink>
									</Tooltip>
								</li>
							),
						)
					) : (
						<div />
					)}
				</ul>
			</PageSectionItem>
		))}
	</div>
);

export { ContentItem };
