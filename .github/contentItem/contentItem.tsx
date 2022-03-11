// /* eslint-disable react/no-children-prop */
// import { FC } from 'react';
// import { IsOk } from 'types';

// import ReactMarkdown from 'react-markdown';
// import { Heading } from '@/features/ui/heading';
// import { Tooltip } from '@/features/ui/tooltip';
// import { Loading, PageLink, PageSectionItem } from '@/features/ui';
// import { NoContent } from '@/features/ui/';
// import * as CSS from './styled';

// interface ContentProps {
// 	contentKeys: string[];
// 	pageContent: any;
// 	isOk: IsOk;
// }

// export type LinkProps = {
// 	name: string;
// 	url: string;
// };

// const ContentItem: FC<ContentProps> = ({
//   contentKeys = [],
//   pageContent = '',
//   isOk = {},
// }) => (
// 	<div>
// 		{isOk.isLoading && <Loading />}
// 		{isOk.isError && <NoContent />}

// 		{contentKeys?.map((value: string) => (
// 			<PageSectionItem key={value}>
// 				<Heading id={value.toLowerCase()} type="h3" weight={600}>
// 					{(!isOk.isLoading || !isOk.isError) && value}
// 				</Heading>
// 				<div>
// 					{(!isOk.isLoading || !isOk.isError)
// 						&& pageContent
// 						&& pageContent[value]?.map(({ name, url }: LinkProps, idx: number) => (
// 							<CSS.Center key={idx.toString()}>
// 								<CSS.ArrowIcon size={20} />
// 								<Tooltip message={url}>
// 									<PageLink href={url} target="_blank">
// 										{name}
// 									</PageLink>
// 								</Tooltip>
// 							</CSS.Center>
// 						))}
// 				</div>
// 			</PageSectionItem>
// 		))}
// 	</div>
// );

// export { ContentItem };
