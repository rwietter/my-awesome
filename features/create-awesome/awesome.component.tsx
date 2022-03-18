import MarkdownIt from 'markdown-it';
import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import MdEditor from 'react-markdown-editor-lite';
import { Button } from '@/features/ui/button';
import * as S from './style';
import { Margin } from '@/features/ui/margin';
import { Toastfy, notify } from '@/features/ui';
import { useThemeStore } from '@/features/ui/theme';
import darkMd from '@/styles/github-markdown-css-dark.module.css';
import lightMd from '@/styles/github-markdown-css-light.module.css';
import { handleError } from '@/helpers/handler-notify';
import Layout from '@/components/layout/layout';
import { contentActions } from './store';

const mdParser = new MarkdownIt();

const CreateAwesome = () => {
  const awesomeRef = useRef<any>(null);
  const titleRef = useRef<any>(null);

  const [isMarkForm, setIsMarkForm] = useState(false);
  const [awesomeText, setAwesomeText] = useState('');
  const { saveAwesome } = contentActions();

  const { theme } = useThemeStore();
  const [mdTheme, setMdTheme] = useState(lightMd['markdown-body']);

  useEffect(() => {
    const mdTheme =	theme === 'light' ? lightMd['markdown-body'] : darkMd['markdown-body'];
    setMdTheme(mdTheme);
  }, [theme]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (titleRef.current) {
      const title = titleRef.current.value;
      saveAwesome({ contentItem: awesomeText, title });
    }
  }

  const handleSendMarkdown = () => {
    if (awesomeRef.current) {
      const { text: markdownText } = awesomeRef.current.state;

      if (!markdownText) {
        notify({
          type: 'warn',
          message: 'Please, insert a valid text',
        });
        return;
      }
      setAwesomeText(markdownText);
    }
    setIsMarkForm((state) => !state);
  };

  return (
		<Layout>
			<S.Container>
				<S.Forms id="awesome-form" onSubmit={(e) => handleSubmit(e)}>
					{!isMarkForm && (
						<S.MdEditorCSS
							ref={awesomeRef}
							renderHTML={(text: string) => mdParser.render(text)}
							autoFocus
							className={mdTheme}
							defaultValue="# Write your awesome here"
							allowPasteImage
							markdownClass={mdTheme}
						/>
					)}
					{!isMarkForm && (
						<Button
							type="button"
							color="primary"
							data-type="md"
							onClick={handleSendMarkdown}
						>
							Next
						</Button>
					)}
					{isMarkForm && (
						<S.FormNameContainer>
							<S.FormName>
								<S.Title>Please, a new title for your awesome</S.Title>
								<Margin margin="0 0 2rem 0" />
								<S.Label htmlFor="awesome">Name of awesome</S.Label>
								<S.Input name="awesome" type="text" required ref={titleRef} maxLength={45} max={45} />
								<S.FormNameButtonFlex>
									<Button type="submit" color="primary">
										Submit
									</Button>
									<Margin margin="7rem 1rem 0 0" />
									<Button
										type="button"
										color="secondary"
										onClick={handleSendMarkdown}
									>
										Back
									</Button>
								</S.FormNameButtonFlex>
							</S.FormName>
						</S.FormNameContainer>
					)}
				</S.Forms>
			</S.Container>
			<Toastfy />
		</Layout>
  );
};

export { CreateAwesome };
