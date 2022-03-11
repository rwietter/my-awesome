/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
import { FC, useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import nord from 'react-syntax-highlighter/dist/cjs/styles/hljs/nord';
import { HighlighterCSS, ReactMarkdownCSS } from './styled';
import darkMd from '@/styles/github-markdown-css-dark.module.css';
import lightMd from '@/styles/github-markdown-css-light.module.css';
import { useThemeStore } from '@/features/ui/theme';
import { Loading, NoContent } from '@/features/ui';
import { MarkdownRenderProps } from './types';

const MarkdownRender: FC<MarkdownRenderProps> = ({ content, isOk }) => {
  const { theme } = useThemeStore();
  const [mdTheme, setMdTheme] = useState(lightMd['markdown-body']);

  useEffect(() => {
    const mdTheme =	theme === 'light' ? lightMd['markdown-body'] : darkMd['markdown-body'];
    setMdTheme(mdTheme);
  }, [theme]);

  return (
		<>
			{isOk.isLoading && <Loading />}
			{isOk.isError && <NoContent />}
			{!isOk.isLoading && !isOk.isError && (
				<ReactMarkdownCSS
					children={content}
					className={mdTheme}
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
					components={{
					  code({
					    node, inline, className, children, ...props
					  }) {
					    const match = /language-(\w+)/.exec(className || '');
					    return !inline && match ? (
								<HighlighterCSS
									children={String(children).replace(/\n$/, '')}
									style={nord}
									language={match[1]}
									PreTag="div"
									{...props}
								/>
					    ) : (
								<code className={className} {...props}>
									{children}
								</code>
					    );
					  },
					}}
				/>
			)}
		</>
  );
};

export { MarkdownRender };
