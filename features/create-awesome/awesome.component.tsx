import { NextPage } from 'next';
import { FormEvent, useRef } from 'react';

import { handleError } from 'helpers/http-error';
import * as S from './style';
import { Toastfy } from '@/features/ui/toastfy';
import { useAwesomeStore, contentActions } from '@/features/create-awesome/store';
import { PageLink, PageSectionItem } from '@/features/ui';
import { useAuthStore } from '@/features/user/store';

interface LinkProps {
	name: string;
	url: string;
}

const CreateAwesome: NextPage = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const {
    addContentIndex, addContentItem, saveAwesome, resetStore,
  } = contentActions();
  const { contentItem, contentIndex } = useAwesomeStore();
  const { token } = useAuthStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const title = e.currentTarget.awesome.value;

      if (title) saveAwesome({ title, contentItem, token });
    } catch (error) {
      handleError(error);
    }
  };

  const handleAddContentItem = () => {
    const contentText = inputRef.current?.value;

    if (contentText) {
      addContentItem({ contentText, addContentIndex });
    }
  };

  const handleClearPreview = () => resetStore();

  return (
		<S.Container>
			<S.Section>
				<S.Title>Create Awesome</S.Title>
				<S.Form onSubmit={handleSubmit}>
					<S.Label htmlFor="awesome">Name of awesome</S.Label>
					<S.Input name="awesome" type="text" />
					<S.Label htmlFor="links">Add content</S.Label>
					<S.TextArea
						name="links"
						rows={8}
						cols={40}
						ref={inputRef}
						placeholder={
							'Typescript\n- docs, https://www.typescriptlang.org/docs/'
						}
					/>
					<S.FlexButton>
						<S.Submit type="button" onClick={handleAddContentItem}>
							<p>Add content</p>
						</S.Submit>
						<S.Submit type="submit">
							<p>Save awesome</p>
						</S.Submit>
						<S.Submit type="button" onClick={handleClearPreview}>
							<p>Clear preview</p>
						</S.Submit>
					</S.FlexButton>
				</S.Form>
			</S.Section>
			<S.Section>
				<S.Title>Preview your awesome content</S.Title>
				{contentIndex ? (
				  contentIndex?.map((value: string) => (
						<PageSectionItem key={value}>
							<h3 id={value}>{value}</h3>
							<ul>
								{contentItem ? (
								  contentItem[value]?.map(
								    ({ name, url }: LinkProps, idx: number) => (
											<li key={idx.toString()}>
												<PageLink href={url} target="_blank" rel="noreferrer">
													{name}
												</PageLink>
											</li>
								    ),
								  )
								) : (
									<div />
								)}
							</ul>
						</PageSectionItem>
				  ))
				) : (
					<>
						<h3>Exemple</h3>
						<ul>
							<li>
								<PageLink href="google.com" target="_blank">
									Google
								</PageLink>
							</li>
						</ul>
					</>
				)}
			</S.Section>
			<Toastfy />
		</S.Container>
  );
};

export { CreateAwesome };
