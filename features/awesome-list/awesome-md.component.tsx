/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
import { FC, useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Prism from 'prismjs';
import remarkGemoji from 'remark-gemoji';
import { ReactMarkdownCSS } from './styled';
import darkMd from '@/styles/github-markdown-css-dark.module.css';
import lightMd from '@/styles/github-markdown-css-light.module.css';
import { useThemeStore } from '@/features/ui/theme';
import { NoContent } from '@/features/ui';
import { MarkdownRenderProps } from './types';

const MarkdownRender: FC<MarkdownRenderProps> = ({
  content,
  isOk,
  fontSize,
}) => {
  const { theme } = useThemeStore();
  const [mdTheme, setMdTheme] = useState(lightMd['markdown-body']);

  useEffect(() => {
    const mdTheme =			theme === 'light' ? lightMd['markdown-body'] : darkMd['markdown-body'];
    setMdTheme(mdTheme);
  }, [theme]);

  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    Prism.highlightAll();
  }, [theme]);

  return (
		<article className="article">
			{isOk.isError && <NoContent />}
			{!isOk.isLoading && !isOk.isError && (
				<ReactMarkdownCSS
					fontSize={fontSize}
					children={content}
					className={mdTheme}
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw, remarkGemoji]}
				/>
			)}
		</article>
  );
};

export { MarkdownRender };
