import { NextPage } from 'next';
import { FormEvent, useRef } from 'react';

import * as S from '../../components/awesome/style';
import { PageLink } from '../../components/styles/PageLink';
import { PageSectionItem } from '../../components/styles/PageSectionItem';
import withAuth from '../../components/withAuth';
import useAuthStore from '../api/context/auth';
import { useAwesomeStore } from '../api/context/awesome';
import { contentActions } from '../api/context/awesome/actions';

interface LinkProps {
	name: string;
	url: string;
}

// type IContent = {
// 	[key in string]: {
// 		name: string;
// 		url: string;
// 	};
// };

const CreateAwesome: NextPage = () => {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const { addContentIndex, addContentItem, saveAwesome } = contentActions();
	const { contentItem, contentIndex } = useAwesomeStore();
	const { user_id } = useAuthStore();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const title = e.currentTarget.awesome.value;

		if (title) saveAwesome({ title, contentItem, user_id });
	};

	const handleAddContentItem = () => {
		const contentText = inputRef.current?.value;

		if (contentText) {
			addContentItem({ contentText, addContentIndex });
		}
	};

	return (
		<S.Container>
			<S.Section>
				<S.Title>Criar um awesome</S.Title>
				<S.Form onSubmit={handleSubmit}>
					<S.Label htmlFor="awesome">Nome para o awesome</S.Label>
					<S.Input name="awesome" type="text" />
					<S.Label htmlFor="links">
						Adicionar um conteúdo por vez
					</S.Label>
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
							<p>Adicionar conteúdo</p>
						</S.Submit>
						<S.Submit type="submit">
							<p>Salvar awesome</p>
						</S.Submit>
					</S.FlexButton>
				</S.Form>
			</S.Section>
			<S.Section>
				<S.Title>Preview do seu awesome</S.Title>
				{contentIndex ? (
					contentIndex?.map((value: string) => (
						<PageSectionItem key={value}>
							<h3 id={value}>{value}</h3>
							<ul>
								{contentItem ? (
									contentItem[value]?.map(
										(
											{ name, url }: LinkProps,
											idx: number,
										) => (
											<li key={idx}>
												<PageLink
													href={url}
													target="_blank"
													rel="noreferrer"
												>
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
						<h3>Exemplo</h3>
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
		</S.Container>
	);
};

export default withAuth(CreateAwesome);
